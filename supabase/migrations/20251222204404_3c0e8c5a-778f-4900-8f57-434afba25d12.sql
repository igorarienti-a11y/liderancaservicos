-- Create leads table
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  empresa TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  mensagem TEXT,
  service_type TEXT NOT NULL,
  service_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for lead capture from landing pages)
CREATE POLICY "Allow anonymous lead submissions"
ON public.leads
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy to allow authenticated users to view leads (for admin panel later)
CREATE POLICY "Authenticated users can view leads"
ON public.leads
FOR SELECT
TO authenticated
USING (true);