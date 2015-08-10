var TilesLib;
(function TilesLib(){

	var Tile = (function(){
		function Tile(p){
			this.properties=p;
		}
		return Tile;
	})();
	TilesLib.Tile = Tile;

	var Grid = (function(){
		function Grid(h,w,t){
			if(t===undefined) 
				{
					t = [];
					t.length = h*w;
				}
			var tiles = t;
			var width = w;
			var height = h;
		}
		Grid.prototype.get_tile_by_index = function(idx){
			if (idx<0) return tiles[tiles.length-idx];
			return tiles[idx];
		};
		Grid.prototype.get_tile_by_ij = function(i,j){
			return tiles[i*this.width+j];
		};
		Grid.prototype.set_tile_by_index = function(idx,tile){
			if (idx<0) tiles[tiles.length-idx] = tile;
			tiles[idx] = tile;
		};
		Grid.prototype.set_tile_by_ij = function(i,j,tile){
			return tiles[i*this.width+j];
		};
		return Grid;
	})();
	TilesLib.Grid = Grid;

	var Entity = (function(){
		function Entity(p){
			this.properties = p;
		}
		return Entity;
	});
	TilesLib.Entity = Entity;

})(TilesLib||(TilesLib = {}));

var GameModel;
