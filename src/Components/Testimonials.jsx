import { testimonials } from "../constants";
import { Quote } from 'lucide-react'; // Import Quote icon

const Testimonials = () => {
  return (
    <div className="py-20 tracking-wide ">
      {/* Header Section */}
      <div className="text-center mb-16">
        <span className="inline-block bg-red-500/10 text-red-300 rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wider mb-6">
          Testimonials
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          What People Are
          <span className="block mt-2 bg-gradient-to-r from-orange-200 to-red-300 text-transparent bg-clip-text">
            Saying 
          </span>
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              {/* Testimonial Card */}
              <div className="bg-neutral-900/40 backdrop-blur-sm rounded-xl p-8 
                            border border-neutral-800 h-full
                            transition-all duration-300
                            hover:border-red-500/20 hover:bg-neutral-800/50
                            flex flex-col">
                {/* Quote Icon */}
                <div className="absolute -top-4 right-8">
                  <div className="bg-gradient-to-r from-red-500 to-orange-300 rounded-full p-2">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="flex-grow">
                  <p className="text-neutral-300 leading-relaxed mb-6">
                    {testimonial.text}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center mt-6 pt-6 border-t border-neutral-800">
                  <img
                    className="w-12 h-12 rounded-full border-2 border-red-300/20
                             transition-transform duration-300 group-hover:scale-110"
                    src={testimonial.image}
                    alt={testimonial.user}
                  />
                  <div className="ml-4">
                    <h6 className="font-semibold text-white">
                      {testimonial.user}
                    </h6>
                    <span className="text-sm text-red-300">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
          Join the growing community of African enterprises leveraging AI with quality data
        </p>
        
      </div>
    </div>
  );
};

export default Testimonials;