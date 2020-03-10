# Service Factory Map

This map is exported as a package for easy of hooking into the native Jest mocking system.

It's difficult to mock out a module defined inside a service reliably (issues with resolving 
compiled js vs origal ts files) at a global test level, which we need to do to ensure the Beeline
is correctly configured.