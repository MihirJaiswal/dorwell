'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { craftSteps } from "../../../constant/index"

export default function CraftsmanshipShowcase() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % craftSteps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + craftSteps.length) % craftSteps.length)
  }

  return (
    <section className="py-16 bg-[#FAF5F5]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Craftsmanship Process</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <Button
            variant="outline"
            size="icon"
            className="hidden lg:flex"
            onClick={prevStep}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous step</span>
          </Button>
          <Card className="w-full max-w-3xl">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src={craftSteps[currentStep].image}
                alt={craftSteps[currentStep].title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">{craftSteps[currentStep].title}</h3>
              <p className="text-zinc-600">{craftSteps[currentStep].description}</p>
            </CardContent>
          </Card>
          <Button
            variant="outline"
            size="icon"
            className="hidden lg:flex"
            onClick={nextStep}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next step</span>
          </Button>
        </div>
        <div className="flex justify-center mt-8 gap-4 lg:hidden">
          <Button variant="outline" size="sm" onClick={prevStep}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={nextStep}>
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
        <div className="flex justify-center mt-8">
          {craftSteps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentStep ? 'bg-primary' : 'bg-zinc-300'
              }`}
              onClick={() => setCurrentStep(index)}
            >
              <span className="sr-only">Step {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}