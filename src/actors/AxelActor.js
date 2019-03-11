



class AxelActor
	{
	initialize(selfActor)
		{
		this.self = selfActor;
		this.ctx = require('axel');
		this.ctx.clear();
		this.ctx.bg(0,0,0);
		this.ctx.fg(255,0,0);
		this.ctx.cursor.restore();
		}

	update(axelData)
		{
		if (axelData.clear === true)
			{
			this.ctx.clear();
			}
		// Background to yellow, foreground to black
		this.ctx.bg(255,255,0);
		this.ctx.fg(0,0,0);
		this.ctx.text(10,2," BLACK ON YELLOW! ");
		this.ctx.cursor.restore();

		}
	destroy()
		{
		this.ctx.cursor.restore();
		}
	}



module.exports = AxelActor
