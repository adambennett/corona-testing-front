import {MatSnackBar} from "@angular/material/snack-bar";

export class AlertHelper {
  snackBar: MatSnackBar;
  force: boolean;

  constructor(snackBar: MatSnackBar) {
    this.snackBar = snackBar;
    this.force = false;
  }
}

export class Util {
  public static toast(alertHelper: AlertHelper, message: string, seconds?: number, styles?: string | string[], options?: any) {
      if (!seconds) {
        seconds = 3;
      }
      if (!styles) {
        styles = [];
      }
      if (!options) {
        options = {};
      }
      options.duration = seconds * 1000;
      options.panelClass = styles;
      alertHelper.snackBar.open(message, null, options);
  }

  public static errorToast(alertHelper: AlertHelper, message: string, seconds?: number) {
    Util.toast(alertHelper, message, seconds, 'red-toast');
  }

  public static goodToast(alertHelper: AlertHelper, message: string, seconds?: number) {
    Util.toast(alertHelper, message, seconds, 'green-toast');
  }

  public static neutralToast(alertHelper: AlertHelper, message: string, seconds?: number) {
    Util.toast(alertHelper, message, seconds, 'yellow-toast');
  }

}
