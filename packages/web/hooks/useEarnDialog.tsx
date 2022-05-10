import { useState } from "react";
import styles from "@/styles/EarnDialog.module.css";

export const useEarnDialog = () => {
  const limit = 100;
  const earned = 20;
  const current = 0;

  const [isShowing, setIsShowing] = useState(false);
  const showUp = () => {
    setIsShowing(true);
    setTimeout(() => setIsShowing(false), 5000);
  };

  const EarnDialog = () => {
    return isShowing ? (
      <div className="mx-auto mb-10 p-5 justify-center shadow bg-cyan-50 w-80">
        <div className="text-cyan-500 font-bold text-center mb-5 text-lg animate-bounce">
          + 20 EVOL
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 darg:bg-gray-700">
          <div style={{ width: `${(100 * (current + earned)) / limit}%` }}>
            <div
              className={`${styles.shimmer} bg-cyan-500 h-2.5 rounded-full`}
            />
          </div>
        </div>
      </div>
    ) : (
      <></>
    );
  };

  return { EarnDialog, showUp };
};
