
-- Create table for storing Polar webhook events
CREATE TABLE IF NOT EXISTS polar_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL,
  checkout_id TEXT,
  order_id TEXT,
  subscription_id TEXT,
  customer_email TEXT,
  amount INTEGER,
  currency TEXT,
  status TEXT,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_polar_events_checkout_id ON polar_events(checkout_id);
CREATE INDEX IF NOT EXISTS idx_polar_events_order_id ON polar_events(order_id);
CREATE INDEX IF NOT EXISTS idx_polar_events_event_type ON polar_events(event_type);
CREATE INDEX IF NOT EXISTS idx_polar_events_created_at ON polar_events(created_at);

-- Enable RLS (Row Level Security)
ALTER TABLE polar_events ENABLE ROW LEVEL SECURITY;

-- Create policy to allow service role to manage all data
CREATE POLICY "Service role can manage polar_events" ON polar_events
  FOR ALL USING (auth.role() = 'service_role');
