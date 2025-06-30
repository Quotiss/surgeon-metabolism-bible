
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Verify webhook signature (recommended for production)
    const signature = req.headers.get('polar-signature')
    const body = await req.text()
    
    // Parse the webhook payload
    const event = JSON.parse(body)
    
    console.log('Polar webhook received:', event.type, event.data)

    // Handle different webhook event types
    switch (event.type) {
      case 'checkout.created':
        await handleCheckoutCreated(event.data)
        break
      case 'checkout.updated':
        await handleCheckoutUpdated(event.data)
        break
      case 'order.created':
        await handleOrderCreated(event.data)
        break
      case 'subscription.created':
        await handleSubscriptionCreated(event.data)
        break
      default:
        console.log('Unhandled webhook event type:', event.type)
    }

    return new Response(
      JSON.stringify({ received: true }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    console.error('Webhook processing error:', error)
    return new Response(
      JSON.stringify({ error: 'Webhook processing failed' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})

async function handleCheckoutCreated(data: any) {
  console.log('Checkout created:', data.id)
  
  // Store checkout data for tracking
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
  )

  await supabase
    .from('polar_events')
    .insert({
      event_type: 'checkout_created',
      checkout_id: data.id,
      customer_email: data.customer_email,
      amount: data.amount,
      currency: data.currency,
      metadata: data.metadata,
      created_at: new Date().toISOString(),
    })
}

async function handleCheckoutUpdated(data: any) {
  console.log('Checkout updated:', data.id, 'Status:', data.status)
  
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
  )

  await supabase
    .from('polar_events')
    .insert({
      event_type: 'checkout_updated',
      checkout_id: data.id,
      status: data.status,
      customer_email: data.customer_email,
      amount: data.amount,
      currency: data.currency,
      metadata: data.metadata,
      created_at: new Date().toISOString(),
    })
}

async function handleOrderCreated(data: any) {
  console.log('Order created - purchase confirmed:', data.id)
  
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
  )

  // This is the definitive purchase confirmation
  await supabase
    .from('polar_events')
    .insert({
      event_type: 'purchase_confirmed',
      order_id: data.id,
      checkout_id: data.checkout_id,
      customer_email: data.customer?.email,
      amount: data.amount,
      currency: data.currency,
      metadata: data.metadata,
      created_at: new Date().toISOString(),
    })

  // Trigger server-side conversion tracking
  await trackServerSideConversion(data)
}

async function handleSubscriptionCreated(data: any) {
  console.log('Subscription created:', data.id)
  
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
  )

  await supabase
    .from('polar_events')
    .insert({
      event_type: 'subscription_created',
      subscription_id: data.id,
      customer_email: data.customer?.email,
      amount: data.amount,
      currency: data.currency,
      metadata: data.metadata,
      created_at: new Date().toISOString(),
    })
}

async function trackServerSideConversion(orderData: any) {
  // Here you could integrate with server-side tracking services
  // like Meta Conversions API, Google Analytics 4, etc.
  console.log('Server-side conversion tracking for order:', orderData.id)
  
  // Example: Meta Conversions API call would go here
  // const metaPixelId = Deno.env.get('META_PIXEL_ID')
  // const metaAccessToken = Deno.env.get('META_ACCESS_TOKEN')
  
  // if (metaPixelId && metaAccessToken) {
  //   await fetch(`https://graph.facebook.com/v18.0/${metaPixelId}/events`, {
  //     method: 'POST',
  //     headers: {
  //       'Authorization': `Bearer ${metaAccessToken}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       data: [{
  //         event_name: 'Purchase',
  //         event_time: Math.floor(Date.now() / 1000),
  //         user_data: {
  //           em: orderData.customer?.email ? [orderData.customer.email] : undefined,
  //         },
  //         custom_data: {
  //           currency: orderData.currency,
  //           value: orderData.amount / 100, // Convert cents to dollars
  //         },
  //       }],
  //     }),
  //   })
  // }
}
