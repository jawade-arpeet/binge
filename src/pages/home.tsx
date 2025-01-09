import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Movie from "../types/movies.ts";
import supabase from "../utils/supabase.ts";

import Button from "../components/button.tsx";
import Logo from "../components/logo.tsx";

function Header() {
  return (
    <header className={"px-6 py-4"}>
      <nav className={"flex items-center justify-between"}>
        <Logo />
        <div className={"flex items-center gap-x-4"}>
          <Link to={"/sign-in"}>
            <Button variant={"ghost"}>Login</Button>
          </Link>
          <Link to={"/sign-up"}>
            <Button>Get Started</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const [movies, setMovies] = useState<Movie[]>([]);

  async function getMovies() {
    const { data, error } = await supabase.from("movies").select("*");
    if (error) {
      console.log(error);
      alert(error.message);
    }
    setMovies(data as Movie[]);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className={"px-6"}>
      <h1 className={"text-2xl font-semibold"}>Trending Anime</h1>
      <div
        className={
          "flex items-center gap-x-4 mt-2 w-full overflow-x-scroll *:shrink-0 scrollbar-hide"
        }
      >
        {movies.map((movie) => (
          <div key={movie.id} className="w-72 h-40">
            <img
              src={movie.thumbnailURL}
              className="w-full object-cover rounded-md"
              alt="anime"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <main>
      <Header />
      <Hero />
    </main>
  );
}

export default Home;
