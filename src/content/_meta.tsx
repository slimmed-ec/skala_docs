import type { MetaRecord } from "nextra";
import {
  // Home,
  // Rocket,
  BookOpen,
} from "lucide-react";

const meta: MetaRecord = {
  index: (
    <div className="flex items-center gap-2">
      <BookOpen />
      Documentation
    </div>
  ),
  // themes: (
  //   <div className="flex items-center gap-2">
  //     <BookOpen />
  //     Themes
  //   </div>
  // ),
  temes: {
    title: "Themes",
    theme: {
      navbar: true,
    },
  },
};

export default meta;
