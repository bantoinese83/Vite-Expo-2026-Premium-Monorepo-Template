## 2026-04-23 - API Input Validation Enhancement
**Vulnerability:** Missing input validation on user-controlled parameters (`id`) in API logic.
**Learning:** Even internal or shared logic should strictly validate inputs using schemas (like Zod) to prevent unexpected behavior or injection-style risks before they reach data layers.
**Prevention:** Always use `.parse()` or `.safeParse()` on incoming parameters in shared packages.
