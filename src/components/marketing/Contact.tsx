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
          <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full inline-block">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-6 mb-4 text-gray-900">Join Our Community</h2>
          <p className="text-gray-600 px-4 sm:px-0">
            Have questions about plant care? We'd love to hear from you.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-green-100"
        >
          <div>
            <Input
              placeholder="Your name"
              className="border-green-200 focus:border-green-400"
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your email"
              className="border-green-200 focus:border-green-400"
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Your message"
              className="border-green-200 focus:border-green-400 min-h-[150px]"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};