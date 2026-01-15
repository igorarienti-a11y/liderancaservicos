-- Add optional CNPJ column to leads table
ALTER TABLE public.leads ADD COLUMN cnpj text;