
// Simple actor that wraps around the basic functionality in Ora
// See: https://www.npmjs.com/package/ora
class OraActor
	{
	// This function is called by the actorsystem
	initialize(selfActor)
		{
		this.selfActor = selfActor;
		this.ora = require('ora');
		this.spinner = this.startOra();
		}
	// We can call these functions when we wish from other actors
	startOra(startMessage)
		{
		return this.ora(startMessage).start();
		}
	setText(toText)
		{
		this.spinner.text = toText;
		}

	setWarn(toText)
		{
		this.spinner.warn(toText);
		}
	setColor(toColor)
		{
		this.spinner.color = toColor;
		}
	stopOra(stopMessage)
		{
		this.spinner.Stop();
		}

	// this function is called on a regular basis and allows us to update our state
	// based on our wises in app.js.
	update(oraData)
		{
		if (this.spinner.text != oraData.text)
			{
			this.setColor(oraData.color);
	                this.spinner.spinner = oraData.spinner
			this.spinner.hideCursor = oraData.hideCursor;
	                this.spinner.indent = oraData.indent;

			if (oraData.txtLevel === 0)
				{
				this.setText(oraData.text);
				}
			else if (oraData.txtLevel === 1)
				{
				this.setWarn(oraData.text);
				}
			}
		}

	}

// we must export our actor or we cant see it outside this file
module.exports = OraActor
