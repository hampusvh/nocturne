import "./Gallery.scss";
import AuroraExperiment from "../experiments/aurora/AuroraExperiment";
import JungleExperiment from "../experiments/jungle/JungleExperiment";
import CactusExperiment from "../experiments/cactus/CactusExperiment";
import NebulaExperiment from "../experiments/nebula/NebulaExperiment";
import DuneExperiment from "../experiments/dune/DuneExperiment";
import RedMoonExperiment from "../experiments/redmoon/RedMoonExperiment";
import TideExperiment from "../experiments/tide/TideExperiment";
import VoidExperiment from "../experiments/void/VoidExperiment";
import LighthouseExperiment from "../experiments/lighthouse/LighthouseExperiment";

const Gallery = () => {
    return (
        <div className="gallery">
            <article className="card">
                <div className="frame"><AuroraExperiment /></div>
                <footer className="card__meta">
                    <span className="card__title">Aurora</span>
                    <span className="card__sub">The sky remembers something</span>
                </footer>
            </article>

            <article className="card">
                <div className="frame"><JungleExperiment /></div>
                <footer className="card__meta">
                    <span className="card__title">Jungle</span>
                    <span className="card__sub">Older than anything with a name</span>
                </footer>
            </article>

            <article className="card">
                <div className="frame"><CactusExperiment /></div>
                <footer className="card__meta">
                    <span className="card__title">Cactus</span>
                    <span className="card__sub">It has been here longer than you</span>
                </footer>
            </article>

            <article className="card">
                <div className="frame"><NebulaExperiment /></div>
                <footer className="card__meta">
                    <span className="card__title">Nebula</span>
                    <span className="card__sub">Two forces, neither winning</span>
                </footer>
            </article>

            <article className="card">
                <div className="frame"><DuneExperiment /></div>
                <footer className="card__meta">
                    <span className="card__title">Dune</span>
                    <span className="card__sub">A sun that never rises</span>
                </footer>
            </article>

            <article className="card">
                <div className="frame"><RedMoonExperiment /></div>
                <footer className="card__meta">
                    <span className="card__title">Red Moon</span>
                    <span className="card__sub">It was there before you looked up</span>
                </footer>
            </article>

            <article className="card">
                <div className="frame"><TideExperiment /></div>
                <footer className="card__meta">
                    <span className="card__title">Tide</span>
                    <span className="card__sub">The water knows the hour</span>
                </footer>
            </article>

            <article className="card">
                <div className="frame"><VoidExperiment /></div>
                <footer className="card__meta">
                    <span className="card__title">Void</span>
                    <span className="card__sub">Too far to be stars</span>
                </footer>
            </article>

            <article className="card">
                <div className="frame"><LighthouseExperiment /></div>
                <footer className="card__meta">
                    <span className="card__title">Lighthouse</span>
                    <span className="card__sub">Someone left the light on</span>
                </footer>
            </article>
        </div>
    );
}

export default Gallery;