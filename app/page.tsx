import { FiArrowDown } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import ActionButton from "./components/ActionButton";
import BadgePill from "./components/BadgePill";
import ClickHint from "./components/ClickHint";
import HeroCopy from "./components/HeroCopy";
import HeroLayout from "./components/HeroLayout";
import HeroTitle from "./components/HeroTitle";

export default function Home() {
  return (
    <HeroLayout>
      <BadgePill iconSrc="/assets/2_Logo_Bulle.png">
        Créer un site web <span className="underline">vraiment</span> unique
      </BadgePill>

      <div className="flex max-w-4xl flex-col items-center gap-6">
        <HeroTitle
          text="Votre site doit donner envie de rester, pas de revenir en arrière."
          highlights={["site", "donner envie", "rester", "revenir", "arrière"]}
          strikeHighlights={["revenir", "arrière"]}
        />
        <HeroCopy>
          <span className="block">
            Design moderne, SEO solide, Suivi complet :
          </span>
          <span className="block">
            on construit un site qui retient vos visiteurs et vous apporte des
            résultats.
          </span>
        </HeroCopy>
      </div>

      <div className="relative flex flex-col items-center gap-6">
        <div className="relative flex flex-col gap-4 sm:flex-row">
          <ActionButton
            href="#rdv"
            variant="primary"
            icon={<FaCalendarAlt className="text-lg" />}
          >
            Prendre RDV
          </ActionButton>
          <ActionButton
            href="#projets"
            variant="secondary"
            icon={<FiArrowDown className="text-lg" />}
            iconPosition="right"
          >
            Découvrir nos projets
          </ActionButton>
          <div className="pointer-events-none absolute left-0 top-full -mt-2 -translate-x-6 sm:hidden">
            <ClickHint imageSrc="/assets/3_Un_Ptit_Click.png" />
          </div>
        </div>
        <div className="pointer-events-none absolute left-0 top-full -mt-2 hidden -translate-x-6 sm:block">
          <ClickHint imageSrc="/assets/3_Un_Ptit_Click.png" />
        </div>
      </div>
    </HeroLayout>
  );
}
