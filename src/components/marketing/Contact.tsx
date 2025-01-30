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
          <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full inline-block">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-6 mb-4 text-gray-900">Get in Touch</h2>
          <p className="text-gray-600 px-4 sm:px-0">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-blue-100"
        >
          <div>
            <Input
              placeholder="Your name"
              className="border-blue-200 focus:border-blue-400"
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your email"
              className="border-blue-200 focus:border-blue-400"
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Your message"
              className="border-blue-200 focus:border-blue-400 min-h-[150px]"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};