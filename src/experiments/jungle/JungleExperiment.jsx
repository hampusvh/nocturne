import styles from "./Jungle.module.scss";

const JungleExperiment = () => {
    return (
        <div className={styles.root} aria-hidden>
            <div className={styles.glow} />
            <div className={styles.mist} />
        </div>
    );
}

export default JungleExperiment;