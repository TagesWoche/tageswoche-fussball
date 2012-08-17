// Generated by CoffeeScript 1.3.3
(function() {

  this.tageswoche = this.tageswoche || {};

  this.tageswoche.templates = (function() {
    return {
      table: _.template("<table id=\"player-table\">\n  <colgroup>\n    <col class=\"col-player\">\n    <col class=\"col-games\">\n    <col class=\"col-minutes\">\n    <col class=\"col-grade\">\n    <col class=\"col-goals\">\n    <col class=\"col-assists\">\n    <col class=\"col-yellow\" align=\"center\">\n    <col class=\"col-yellow-red\" align=\"center\">\n    <col class=\"col-red\" align=\"center\">\n  </colgroup>\n  <thead>\n    <tr>\n      <th>Spieler</th>\n      <th>Einsätze</th>\n      <th>Minuten</th>\n      <th>&oslash; Bewertung</th>\n      <th>Tore</th>\n      <th>Assists</th>\n      <th>Gelbe</th>\n      <th>Gelb-Rote</th>\n      <th>Rote</th>\n    </tr>\n  </thead>\n  <tbody>\n    <% _.each(players, function(player) { %>\n      <tr>\n        <td><%= player.name %></td>\n        <td class=\"center\"><%= player.played %></td>\n        <td class=\"center\"><%= tageswoche.tableData.aboveNull( player.minutes ) %></td>\n        <td class=\"center\"><%= tageswoche.tableData.aboveNullRounded( player.averageGrade ) %></td>\n        <td class=\"center\"><%= tageswoche.tableData.aboveNull( player.goals ) %></td>\n        <td class=\"center\"><%= tageswoche.tableData.aboveNull( player.assists ) %></td>\n        <td class=\"center\"><%= tageswoche.tableData.aboveNull( player.yellowCards ) %></td>\n        <td class=\"center\"><%= tageswoche.tableData.aboveNull( player.yellowRedCards ) %></td>\n        <td class=\"center\"><%= tageswoche.tableData.aboveNull( player.redCards ) %></td>\n      </tr>\n    <% }); %>\n  </tbody>\n  <tbody style=\"font-weight:bold;text-align:center\">\n    <tr>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n    </tr>\n    <tr>\n      <% sum = tageswoche.tableData.totals( players ) %>\n      <td>Total</td>\n      <td><%= sum.played %></td>\n      <td><%= sum.minutes %></td>\n      <td><%= sum.averageGrade %></td>\n      <td><%= sum.goals %></td>\n      <td><%= sum.assists %></td>\n      <td><%= sum.yellowCards %></td>\n      <td><%= sum.yellowRedCards %></td>\n      <td><%= sum.redCards %></td>\n    </tr>\n  </tbody>\n</table>"),
      tableGames: _.template("<table id=\"player-table\">\n  <colgroup>\n    <col class=\"col-player\">\n    <col class=\"col-games\">\n    <col class=\"col-minutes\">\n    <col class=\"col-grade\">\n    <col class=\"col-graph\">\n  </colgroup>\n  <thead>\n    <tr>\n      <th>Spieler</th>\n      <th>Einsätze</th>\n      <th>Minuten</th>\n      <th>&oslash; Bewertung</th>\n      <th>Bewertung letzte Spiele</th>\n    </tr>\n  </thead>\n  <tbody>\n    <% _.each(players, function(player) { %>\n      <tr>\n        <td><%= player.name %></td>\n        <td class=\"center\"><%= player.played %></td>\n        <td class=\"center\"><%= tageswoche.tableData.aboveNull( player.minutes ) %></td>\n        <td class=\"center\"><%= tageswoche.tableData.aboveNullRounded( player.averageGrade ) %></td>\n        <td class=\"gradesList bar graph\"> \n        </td>\n      </tr>\n    <% }); %>\n  </tbody>\n  <tbody style=\"font-weight:bold;text-align:center\">\n    <tr>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n    </tr>\n    <tr>\n      <td>Total</td>\n      <td><%= sum.played %></td>\n      <td><%= sum.minutes %></td>\n      <td><%= sum.averageGrade %></td>\n      <td class=\"bar graph\" id=\"totalGrades\" style=\"text-align: left\">\n      </td>\n    </tr>\n  </tbody>\n</table>")
    };
  })();

}).call(this);
