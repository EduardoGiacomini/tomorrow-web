export class DateTimeUtils {
  static secondsToHourMinutesSeconds(sec: number): string {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec - hours * 3600) / 60);
    const seconds = sec - hours * 3600 - minutes * 60;

    let output = "";

    if (hours > 0) {
      const hoursFormatted = hours.toString().padStart(2, "0");
      output += `${hoursFormatted}:`;
    }

    const minutesFormatted = minutes.toString().padStart(2, "0");
    output += `${minutesFormatted}:`;

    const secondsFormatted = seconds.toString().padStart(2, "0");
    output += `${secondsFormatted}`;

    return output;
  }
}
