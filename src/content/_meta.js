import { Home, BookOpen, Rocket } from "lucide-react";

const meta = {
  index: (
    <div className="flex items-center gap-2">
      <BookOpen />
      Documentation
    </div>
  ),
  start: (
    <div className="flex items-center gap-2">
      <Rocket />
      Getting Started
    </div>
  ),
  features: (
    <div className="flex items-center gap-2">
      <Home />
      features
    </div>
  ),
  themes: "",
  advanced: "",
};

export default meta;
