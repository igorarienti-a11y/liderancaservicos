-- Add explicit restrictive policies for UPDATE and DELETE on leads table
-- These policies ensure no one can modify or delete leads via client-side access

-- Policy to prevent any UPDATE operations on leads
CREATE POLICY "Leads cannot be updated"
ON public.leads
FOR UPDATE
TO authenticated
USING (false);

-- Policy to prevent any DELETE operations on leads
CREATE POLICY "Leads cannot be deleted"
ON public.leads
FOR DELETE
TO authenticated
USING (false);