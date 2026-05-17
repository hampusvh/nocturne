import styles from "./Lighthouse.module.scss";

const LighthouseExperiment = () => {
    return (
        <div className={styles.root} aria-hidden>
            <div className={styles.mist} />
            <div className={styles.tower} />
            <div className={styles.beam} />
            <div className={styles.light} />
        </div>
    );
}

export default LighthouseExperiment;