import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium bg-gray-100 rounded-full inline-block">
            Contact
          </span>
          <h2 className="text-4xl font-bold mt-6 mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6 bg-gray-50 p-8 rounded-2xl"
        >
          <div>
            <Input
              placeholder="Your name"
              className="bg-white"
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your email"
              className="bg-white"
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Your message"
              className="bg-white min-h-[150px]"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};