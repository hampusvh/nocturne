import "./Gallery.css";
import AuroraExperiment from "../experiments/aurora/AuroraExperiment";
import PlainExperiment from "../experiments/plain/PlainExperiment";
import CactusExperiment from "../experiments/cactus/CactusExperiment";
import NebulaExperiment from "../experiments/nebula/NebulaExperiment";
import DuneExperiment from "../experiments/dune/DuneExperiment";
import RedMoonExperiment from "../experiments/redmoon/RedMoonExperiment";
import VoidExperiment from "../experiments/void/VoidExperiment";
import ForestExperiment from "../experiments/forest/ForestExperiment";
import LighthouseExperiment from "../experiments/lighthouse/LighthouseExperiment";

const Gallery = () => {
    return (
        <div className="gallery">
            <article className="card">
                <div className="frame"><AuroraExperiment /></div>
                <footer className="card__meta">
                    <span className="card__title">Aurora</span>
                    <span className="card__sub">Light that shouldn't exist</span>
                </footer>
            </article>

            <article className="card">
                <div className="frame"><PlainExperiment /></div>
                <footer className="card__meta">
                    <span className="card__title">Plain</span>
                    <span className="card__sub">Before anything happened</span>
                </footer>
            </article>

            <article className="card">
                <div className="frame"><CactusExperiment /></div>
                <footer className="card__meta">
                    <span className="card__title">Cactus</span>
                    <span className="card__sub">Still standing</span>
                </footer>
            </article>

            <article className="card">
                <div className="frame"><NebulaExperiment /></div>
                <footer className="card__meta">
                    <span className="card__title">Nebula</span>
                    <span className="card__sub">Something forming</span>
                </footer>
            </article>

            <article className="card">
                <div className="frame"><DuneExperiment /></div>
                <footer className="card__meta">
                    <span className="card__title">Dune</span>
                    <span className="card__sub">3am in the desert</span>
                </footer>
            </article>

            <article className="card">
                <div className="frame"><RedMoonExperiment /></div>
                <footer className="card__meta">
                    <span className="card__title">Red Moon</span>
                    <span className="card__sub">An omen, maybe</span>
                </footer>
            </article>

            <article className="card">
                <div className="frame"><VoidExperiment /></div>
                <footer className="card__meta">
                    <span className="card__title">Void</span>
                    <span className="card__sub">Nothing, or everything</span>
                </footer>
            </article>

            <article className="card">
                <div className="frame"><ForestExperiment /></div>
                <footer className="card__meta">
                    <span className="card__title">Forest</span>
                    <span className="card__sub">Something watching</span>
                </footer>
            </article>

            <article className="card">
                <div className="frame"><LighthouseExperiment /></div>
                <footer className="card__meta">
                    <span className="card__title">Lighthouse</span>
                    <span className="card__sub">Something in the fog</span>
                </footer>
            </article>
        </div>
    );
}

export default Gallery;