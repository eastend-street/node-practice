

class OraActor
	{
	initialize(selfActor)
		{
		this.selfActor = selfActor;
		this.ora = require('ora');
		this.spinner = this.startOra();
		}
	startOra(startMessage)
		{
		return this.ora(startMessage).start();
		}
	setText(toText)
		{
		this.spinner.text = toText;
		}
	setColor(toColor)
		{
		this.spinner.color = toColor;
		}
	stopOra(stopMessage)
		{
		this.spinner.Stop();
		}

	update(oraData)
		{
		this.setColor(oraData.color);
		this.spinner.spinner = oraData.spinner;
		this.spinner.hideCursor = oraData.hideCursor;
		this.spinner.indent = oraData.indent;
		if (oraData.txtLevel === 0)
			{
			this.setText(oraData.text);
			}
		else if (oraData.txtLevel === 1)
			{
			this.spinner.warn(oraData.text);
			}
		}

	}


module.exports = OraActor
