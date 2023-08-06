import "./App.css";
import Logo from "./assets/Logo";
import AmmoArray from "./assets/ammo.json";

export default function App() {
  return (
    <div className="main-page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

// *** HEADER SECTION
function Header() {
  return (
    <header>
      <Logo />

      <nav>
        <h2>Ammo & Armor Charts</h2>
        <button className="app-bars">☰</button>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main>
      <img src="/public/mp-tarkov.jpg" alt="Escape From Tarkov Banner" />
      <article>
        <h2 className="cta--title">
          Tarkov city, Norvinsk region. Present time.
        </h2>
        <span>
          The players will have to experience living in the skin of one of the
          mercenaries who survived the initial stage of the Tarkov conflict.
          After choosing one of the sides - USEC or BEAR - the player’s
          character starts to make his way out of the city. Tarkov is sealed off
          by UN and Russian military, supply chains are cut, communication with
          operational command is lost, and in these conditions everyone has to
          make his own choices of what to do and how to get out of the
          chaos-ridden metropolis.
        </span>
      </article>
      <section>
        <table>
          <thead>
            <tr>
              <th>VALUE</th>
              <th>EFFECTIVENESS</th>
              <th>BULLETS STOPPED</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {}
            <tr>
              <td className="color-0 centered">0</td>
              <td>Pointless</td>
              <td>20+</td>
              <td>Can not penetrate in any reasonable amount of hits</td>
            </tr>
            <tr>
              <td className="color-1 centered">1</td>
              <td>It is possible, but...</td>
              <td>13 to 20</td>
              <td>
                Typically does not penetrate at all for a large number of hits,
                or starts with a very low chance and barely increases
              </td>
            </tr>
            <tr>
              <td className="color-2 centered">2</td>
              <td>Magdump</td>
              <td>9 to 13</td>
              <td>
                Has a very low or no penetration chance initially and very
                slowly gains chance
              </td>
            </tr>
            <tr>
              <td className="color-3 centered">3</td>
              <td>Slightly Effective</td>
              <td>5 to 9</td>
              <td>
                Has a low penetration chance initially and slowly gains chance,
                or quickly damages armor until it penetrates
              </td>
            </tr>
            <tr>
              <td className="color-4 centered">4</td>
              <td>Effective</td>
              <td>3 to 5</td>
              <td>
                Starts with a low-medium penetration chance but quickly
                increases
              </td>
            </tr>
            <tr>
              <td className="color-5 centered">5</td>
              <td>Very effective</td>
              <td>1 to 3</td>
              <td>
                Penetrates a large percent of the time initially, often quickly
                going to +90%
              </td>
            </tr>
            <tr>
              <td className="color-6 centered">6</td>
              <td>Basically ignores</td>
              <td>1</td>
              <td>Initially penetrates +80% of the time</td>
            </tr>
          </tbody>
          <caption>Ammo & Armor Chart Legend</caption>
        </table>
      </section>
    </main>
  );
}

function Footer() {
  function handleClick() {
    console.log(AmmoArray);
  }
  return (
    <footer>
      <div className="footer-div">
        <Logo />
        <ul>
          <li>PURCHASE</li>
          <li>ABOUT</li>
          <li>FORUMS</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <button className="cta-btn" onClick={handleClick}>
        GET READY FOR ESCAPE
      </button>
      <p>&copy; 2015-2023 BATTLESTATE GAMES LIMITED. All Rights Reserved.</p>
    </footer>
  );
}
