import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [form, setForm] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [sending, setSending] = useState(false);

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ContactForm;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    // Build mailto link as a simple send mechanism
    const subject = encodeURIComponent(`Contact from ${result.data.firstName} ${result.data.lastName}`);
    const body = encodeURIComponent(
      `Name: ${result.data.firstName} ${result.data.lastName}\nEmail: ${result.data.email}\n\n${result.data.message}`
    );
    window.open(`mailto:mathieulebrec@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSending(false);
    toast.success("Opening your email client…");
  };

  const inputClass =
    "w-full rounded-full border border-foreground/25 bg-transparent px-5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan/40 transition-shadow duration-200";

  return (
    <section id="contact" className="bg-muted/40 py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left — info */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Want to connect? Fill out your information or contact us at:
            </p>

            <div className="space-y-3 text-foreground/90 text-sm">
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+15102051747" className="hover:text-cyan transition-colors">
                  +1 510-205-1747
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:mathieulebrec@gmail.com" className="hover:text-cyan transition-colors">
                  mathieulebrec@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/hervelebrec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:underline"
                >
                  Click HERE
                </a>
              </p>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Name row */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">Name</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">
                    First Name <span className="text-muted-foreground/70">(required)</span>
                  </label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className={inputClass}
                  />
                  {errors.firstName && (
                    <p className="text-destructive text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">
                    Last Name <span className="text-muted-foreground/70">(required)</span>
                  </label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className={inputClass}
                  />
                  {errors.lastName && (
                    <p className="text-destructive text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">
                Email <span className="text-xs text-muted-foreground font-normal">(required)</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={inputClass}
              />
              {errors.email && (
                <p className="text-destructive text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">
                Message <span className="text-xs text-muted-foreground font-normal">(required)</span>
              </label>
              <textarea
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={5}
                className="w-full rounded-2xl border border-foreground/25 bg-transparent px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan/40 transition-shadow duration-200 resize-y"
              />
              {errors.message && (
                <p className="text-destructive text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center rounded-full bg-foreground/70 text-background text-sm font-semibold px-8 py-2.5 hover:bg-foreground/90 transition-all duration-200 active:scale-[0.97] disabled:opacity-50"
            >
              {sending ? "Sending…" : "SEND"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
