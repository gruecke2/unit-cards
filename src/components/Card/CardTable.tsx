import React from 'react';
import { UnitSize, UnitStats } from '../../types/units';

function getDiceImg(diceVal: UnitSize) {
  switch (diceVal) {
    case 'd4':
      return require('./assets/dice/d4.png');
    case 'd6':
      return require('./assets/dice/d6.png');
    case 'd8':
      return require('./assets/dice/d8.png');
    case 'd10':
      return require('./assets/dice/d10.png');
    case 'd12':
      return require('./assets/dice/d12.png');
    case 'd20':
      return require('./assets/dice/d20.png');
    default:
      break;
  }
}
const positive = (num: number): string => (Math.sign(num) >= 0 ? '+' : '');
export const CardTable = ({
  size,
  damage,
  attack,
  defense,
  power,
  toughness,
  morale,
  command,
  type,
}: UnitStats) => (
  <table className="card-table">
    <tbody>
      <tr>
        <td>Attack:</td>
        <td className="text-right pad-right">
          {type === 'Fortification' ? '—' : `${positive(attack)}${attack}`}
        </td>
        <td>Defense:</td>
        <td className="text-right">
          {type === 'Fortification' ? '—' : defense}
        </td>
      </tr>
      <tr>
        <td>Power:</td>
        <td className="text-right pad-right">
          {type === 'Fortification' ? '—' : `${positive(power)}${power}`}
        </td>
        <td>Toughness:</td>
        <td className="text-right">{toughness}</td>
      </tr>
      <tr>
        <td>Morale:</td>
        <td className="text-right pad-right">
          {type === 'Fortification' ? '—' : `${positive(morale)}${morale}`}
        </td>
        <td>Command:</td>
        <td className="text-right">
          {type === 'Fortification' ? '—' : `${positive(command)}${command}`}
        </td>
      </tr>
      <tr>
        <td>Damage:</td>
        <td className="text-right pad-right">
          {type === 'Fortification' ? '—' : `${damage}`}
        </td>
      <td>Size:</td>
      <td className="text-right text-transform-none"><img alt="" className="dice-img" src={getDiceImg(size)} /></td>
      </tr>
    </tbody>
  </table>
);
