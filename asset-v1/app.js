/* 0.5.7 2021-12-27 16:37:09 */
var app = new function() {
	this.name = "TestBox", 
	this.version = "1_TestBox",
	this.date = "2023", 
	this.folder = "asset-v1/", 
	this.looptime = 8352, 
	this.bpm = 115, 
	this.totalframe = 400, 
	this.nbpolo = 7, 
	this.nbloopbonus = 2, 
	this.bonusloopA = !1, 
	this.bonusendloopA = !1, 
	this.recmaxloop = 34, 
	this.recminloop = 4, 
	this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, 
	this.spritepolo = "polo-sprite.png", 
	this.spritepolotshirt = "polo-sprite-tshirt.png", 
	this.spritepicto = "game-picto.png", 
	this.colBck = "#121212", 
	this.col0 = "#919191", 
	this.col1 = "#5f5f5f", 
	this.col2 = "#4b4b4b", 
	this.col3 = "#373737", 
	this.col4 = "#232323", 
	
	this.animearray = [
	    {
		name: "1_test",
		color: "000000",
		uniqsnd: !1
	    }
	], this.bonusarray = [ /*No bonuses?*/ ];
	
	for (var n = 0, o = this.animearray.length; n < o; n++) {
		var a = this.animearray[n].name;
		this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
	}
};
