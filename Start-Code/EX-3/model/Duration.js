//  TODO - You need to export your class to use it
export class Duration {
  /**
   * Total duration in seconds.
   * @type {number}
   * @private
   */
  _totalSeconds;

  /**
   * Creates a new Duration object.
   * @param {number} [seconds=0] - The number of seconds.
   */
  constructor(seconds = 0) {
     // YOUR CODE
     this._totalSeconds = seconds;
  }

  /**
   * Creates a new Duration from a number of minutes and seconds.
   * @param {number} [minutes=0] - The number of minutes.
   * @param {number} [seconds=0] - The number of seconds.
   * @returns {Duration} A new Duration instance.
   */
  static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
     // YOUR CODE
     let minuteseconds = minutes * 60;
     let trueseconds = minuteseconds + seconds;
     return new Duration(trueseconds);
  }

  /**
   * Returns a new Duration by adding another duration.
   * @param {Duration} other - Another duration to add.
   * @returns {Duration} A new Duration representing the sum.
   */
  plus = (other) => {
         // YOUR CODE
         let secs = this._totalSeconds + other._totalSeconds
         return new Duration(secs);
  };

  // YOUR COMMENT
  /**
   * 
   * @param {Duration} other - Another Duration to be substarcted
   * @returns {Duration} A new duration representing the result of this operation
   */
  minus = (other) => {
         // YOUR CODE
         if(other._totalSeconds>this._totalSeconds){
            console.log("The duration inputted can not be greater then the main duration")
            return
         };
         let secs = this._totalSeconds - other._totalSeconds;
         return new Duration(secs);

  };

  /**
   * Converts the duration into a human-readable string, e.g., "2m 30s".
   * @returns {string} The formatted duration string.
   */
  toString = () => {
        // YOUR CODE
        let seconds = this._totalSeconds % 60;
        let minutes = Math.floor(this._totalSeconds / 60);
        return `${minutes}m ${seconds}s`
  };
}
