import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { CONTACT_EMAIL } from "./Navbar";

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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    // Reset error status when user starts editing again
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

    setStatus("sending");

    // Build mailto as submission mechanism
    const subject = encodeURIComponent(
      `HL Toxicology inquiry from ${result.data.firstName} ${result.data.lastName}`
    );
    const body = encodeURIComponent(
      `Name: ${result.data.firstName} ${result.data.lastName}\nEmail: ${result.data.email}\n\n${result.data.message}`
    );

    try {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      // Give the mail client a moment to open
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      toast.success("Your email client has been opened with the message.");
    } catch {
      setStatus("error");
      toast.error("Something went wrong. Please email us directly.");
    }
  };

  const resetForm = () => {
    setForm({ firstName: "", lastName: "", email: "", message: "" });
    setErrors({});
    setStatus("idle");
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-200";

  // Success state
  if (status === "success") {
    return (
      <section id="contact" className="bg-card py-20 sm:py-28 scroll-mt-28">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto text-center space-y-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Message prepared</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your email client should have opened with the message. If it didn't,
              you can reach us directly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
            <button
              onClick={resetForm}
              className="text-sm text-primary hover:underline transition-colors"
            >
              Send another message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-card py-20 sm:py-28 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left — info */}
          <div className="space-y-6">
            <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Let's discuss your program
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Whether you're planning a first-in-human study or navigating a regulatory
              challenge, HL Toxicology can help. Reach out to start the conversation.
            </p>

            <div className="space-y-3 text-foreground/90 text-sm pt-2">
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+15102051747" className="hover:text-primary transition-colors">
                  +1 510-205-1747
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p>
                <span className="font-semibold">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/herv%C3%A9-lebrec-pharmd-phd-dabt-a832565/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View profile
                </a>
              </p>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Error banner */}
            {status === "error" && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3 text-sm text-destructive">
                Something went wrong. Please try again or email us directly at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="underline font-medium">
                  {CONTACT_EMAIL}
                </a>
              </div>
            )}

            {/* Name row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                  First Name
                </label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className={inputClass}
                  disabled={status === "sending"}
                />
                {errors.firstName && (
                  <p className="text-destructive text-xs mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                  Last Name
                </label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className={inputClass}
                  disabled={status === "sending"}
                />
                {errors.lastName && (
                  <p className="text-destructive text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={inputClass}
                disabled={status === "sending"}
              />
              {errors.email && (
                <p className="text-destructive text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={5}
                className={inputClass + " rounded-xl resize-y"}
                disabled={status === "sending"}
              />
              {errors.message && (
                <p className="text-destructive text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold px-7 py-2.5 hover:brightness-110 transition-all duration-200 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-primary/15"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Opening email client…
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
