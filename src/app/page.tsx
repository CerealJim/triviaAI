import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import LogoutButton from "./components/LogoutButton";
import TriviaForm from "./components/form";
import Link from "next/link";
import Slider from "./components/Slider";
import styles from "./styles/Home.module.scss";
// declare module "react-slick";

// Sample reviews data
const reviews = [
  {
    id: 1,
    text: "Fantastic service! Loved using Trivia AI for our events.",
    author: "John Doe",
  },
  {
    id: 2,
    text: "Incredible features and customization options. Highly recommended.",
    author: "Jane Smith",
  },
  // Add more reviews as needed
];

// Default function representing the home page
export default async function Home() {
  // Retrieve the user's session on the server side
  const session = await getServerSession(authOptions);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    // Main content container with defined styless
    <main className={styles.main}>
      <h1>Trivia AI</h1>

      <div>{/* <p>Hello 😎</p> */}</div>

      {session && session.user ? (
        <div>
          {/* <h2>Welcome {`${session.user.name}`}. You are logged in</h2> */}
          {/* <LogoutButton /> */}
          <TriviaForm />
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
          <button>
            <Link href="/auth">Login</Link>
          </button>
        </div>
      )}
      {/* <TriviaForm /> */}
      <section className={styles.section}>
        <p>Generate & Customize trivia games with AI</p>
        {/* Add video example here */}
      </section>

      <section className={styles.section}>
        <h2>Features</h2>
        <div className={styles.featureCards}>
          {/* Feature 1 */}
          <div className={styles.featureCard}>
            <h3>Feature 1</h3>
            <p>Description of feature 1.</p>
          </div>
          {/* Feature 2 */}
          <div className={styles.featureCard}>
            <h3>Feature 2</h3>
            <p>Description of feature 2.</p>
          </div>
          {/* Feature 3 */}
          <div className={styles.featureCard}>
            <h3>Feature 3</h3>
            <p>Description of feature 3.</p>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Customers cannot stop raving about TriviaAI</h2>
        <Slider></Slider>
      </section>
    </main>
  );
}
