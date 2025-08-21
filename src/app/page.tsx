import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { LeafIcon, MapPinIcon, UsersIcon, AwardIcon, StarIcon } from "lucide-react";
import AiTools from "@/components/ai-tools";

const products = [
  { name: "Organic Tomatoes", description: "Fresh, juicy, and grown without any pesticides.", image: "https://placehold.co/600x400.png", hint: "red tomatoes" },
  { name: "Golden Wheat", description: "High-quality grain perfect for baking and cooking.", image: "https://placehold.co/600x400.png", hint: "wheat field" },
  { name: "Crisp Lettuce", description: "Crisp and fresh lettuce, perfect for salads and sandwiches.", image: "https://placehold.co/600x400.png", hint: "fresh lettuce" },
  { name: "Farm Fresh Eggs", description: "Free-range eggs from happy, healthy chickens.", image: "https://placehold.co/600x400.png", hint: "egg basket" },
];

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Farm landscape", hint: "farm landscape" },
  { src: "https://placehold.co/600x400.png", alt: "Crops growing in the field", hint: "growing crops" },
  { src: "https://placehold.co/600x400.png", alt: "A happy farmer", hint: "happy farmer" },
  { src: "https://placehold.co/600x400.png", alt: "The farmhouse", hint: "farm house" },
  { src: "https://placehold.co/600x400.png", alt: "Freshly harvested vegetables", hint: "harvested vegetables" },
  { src: "https://placehold.co/600x400.png", alt: "Sunrise over the farm", hint: "farm sunrise" },
];

const teamMembers = [
  { name: "Chandra Malti", role: "Founder & Visionary", achievement: "Pioneered sustainable farming in the Deoghar region.", avatar: "https://placehold.co/100x100.png", hint: "woman portrait" },
  { name: "Rajesh Kumar", role: "Farm Manager", achievement: "Increased crop yield by 20% through innovative techniques.", avatar: "https://placehold.co/100x100.png", hint: "man portrait" },
];

const testimonials = [
  { name: "Anjali Sharma", quote: "The produce from Chandra Malti Farm is always fresh and delicious. You can taste the quality and care that goes into it!", rating: 5, hint: "smiling woman" },
  { name: "Vikram Singh", quote: "I love supporting local farms, and Chandra Malti is the best. Their commitment to organic farming is truly commendable.", rating: 5, hint: "smiling man" },
  { name: "Priya Das", quote: "A gem in Deoghar! The farm tour was educational and the products are top-notch. Highly recommended.", rating: 5, hint: "happy person" },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <GallerySection />
        <TeamSection />
        <TestimonialsSection />
        <AiToolsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-primary-foreground">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Lush green fields of Chandra Malti Farm"
        layout="fill"
        objectFit="cover"
        className="z-0 brightness-50"
        data-ai-hint="farm landscape"
      />
      <div className="z-10 p-4 fade-in">
        <h1 className="text-5xl md:text-7xl font-bold font-headline drop-shadow-lg">Chandra Malti Farm</h1>
        <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-md">
          Nurturing Nature's Best in the Heart of Deoghar.
        </p>
        <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">Explore Our Products</Button>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold font-headline">Our Story</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          From a humble beginning, Chandra Malti Farm has grown into a sanctuary of sustainable agriculture. Located in the serene landscapes of Deoghar, our mission is to provide our community with the freshest, most wholesome produce, cultivated with love and respect for the earth.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <Card className="text-center transition-transform transform hover:scale-105 hover:shadow-xl">
          <CardHeader>
            <LeafIcon className="mx-auto h-12 w-12 text-primary" />
            <CardTitle className="mt-4 font-headline">Our History</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Founded with a passion for organic farming, we have been serving the Deoghar community for over a decade, promoting a healthy and sustainable lifestyle.</p>
          </CardContent>
        </Card>
        <Card className="text-center transition-transform transform hover:scale-105 hover:shadow-xl">
          <CardHeader>
            <MapPinIcon className="mx-auto h-12 w-12 text-primary" />
            <CardTitle className="mt-4 font-headline">Our Location</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Nestled in the beautiful surroundings of Deoghar, our farm is a perfect blend of natural beauty and agricultural innovation.</p>
          </CardContent>
        </Card>
        <Card className="text-center transition-transform transform hover:scale-105 hover:shadow-xl">
          <CardHeader>
            <UsersIcon className="mx-auto h-12 w-12 text-primary" />
            <CardTitle className="mt-4 font-headline">Our Community</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We believe in building strong community bonds, sharing our knowledge, and growing together with our customers and partners.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold font-headline">Our Fresh Produce</h2>
          <p className="mt-4 text-lg text-muted-foreground">Straight from our fields to your table.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden group transition-shadow hover:shadow-xl">
              <CardHeader className="p-0">
                <Image src={product.image} alt={product.name} width={600} height={400} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" data-ai-hint={product.hint} />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline">{product.name}</CardTitle>
                <CardDescription className="mt-2">{product.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold font-headline">A Glimpse of Our Farm</h2>
          <p className="mt-4 text-lg text-muted-foreground">Experience the beauty and serenity of Chandra Malti Farm.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md group">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                data-ai-hint={image.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section id="team" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold font-headline">Our Dedicated Team</h2>
          <p className="mt-4 text-lg text-muted-foreground">The heart and soul behind our farm's success.</p>
        </div>
        <div className="mt-12 grid gap-12 md:grid-cols-2 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <CardContent className="flex flex-col sm:flex-row items-center gap-6 p-6">
                <Avatar className="h-24 w-24 border-4 border-primary transition-transform duration-300 group-hover:scale-110">
                  <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold font-headline">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                  <div className="mt-2 flex items-center justify-center sm:justify-start gap-2 text-accent">
                    <AwardIcon className="h-5 w-5" />
                    <p className="italic">{member.achievement}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold font-headline">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">We value our community's feedback.</p>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Avatar>
                             <AvatarImage src={`https://placehold.co/40x40.png`} data-ai-hint={testimonial.hint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="font-headline text-lg">{testimonial.name}</CardTitle>
                             <div className="flex">
                              {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="italic">"{testimonial.quote}"</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function AiToolsSection() {
  return (
    <section id="ai-tools" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold font-headline">AI Content Studio</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Generate engaging descriptions for our farm and products with the power of AI.
          </p>
        </div>
        <div className="mt-12 max-w-5xl mx-auto">
          <AiTools />
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold font-headline">Get in Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">We'd love to hear from you! Send us a message for inquiries or collaborations.</p>
        </div>
        <div className="mt-12 max-w-xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <form className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                </div>
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={5} />
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
