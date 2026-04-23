import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
       /**
        * @type {string}
        * @private
        */
       _pid;
       /**
        * @type {string}
        * @private
        */
       _sportType
       /**
        * @type {Duration}
        * @private
        */
       _duration;
     /**
      * this is used to create a new race results
      * @param {string} pid - this is the participant ID
      * @param {string} sType - this is the sport type
      * @param {Duration} duration - this is the duration for each race
      */
       constructor(pid = 'null', sType = 'null', duration = new Duration(0)){
          this._pid = pid;
          this._sportType = sType;
          this._duration = duration;
       }
  }