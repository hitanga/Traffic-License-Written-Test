/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface TrafficSignRendererProps {
  symbolId: string;
  size?: number; // width and height in px
  className?: string;
}

export default function TrafficSignRenderer({ symbolId, size = 120, className = '' }: TrafficSignRendererProps) {
  // Common colors
  const red = '#DC2626'; // Red
  const yellow = '#F59E0B'; // Amber/Yellow
  const blue = '#1D4ED8'; // Blue
  const black = '#1E293B'; // Slate-800
  const white = '#FFFFFF';

  // Render SVG content based on symbolId
  const renderSignContent = () => {
    switch (symbolId) {
      case 'stop':
        // Red Octagon, white border, "STOP" in white
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Octagon */}
            <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill={red} stroke={white} strokeWidth="3" />
            <polygon points="32,8 68,8 92,32 92,68 68,92 32,92 8,68 8,32" fill="none" stroke={white} strokeWidth="1.5" />
            <text x="50" y="58" fill={white} fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" letterSpacing="1">
              STOP
            </text>
          </svg>
        );

      case 'no-entry':
        // Red Circle, white horizontal bar
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill={red} stroke={white} strokeWidth="3" />
            <rect x="15" y="42" width="70" height="16" fill={white} rx="2" />
          </svg>
        );

      case 'give-way':
        // Inverted Triangle, red border, white background
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="5,15 95,15 50,90" fill={white} stroke={red} strokeWidth="8" strokeLinejoin="round" />
            {/* Small inner triangle line for realism */}
            <polygon points="18,22 82,22 50,76" fill="none" stroke={red} strokeWidth="1" opacity="0.4" />
          </svg>
        );

      case 'no-parking':
        // Blue circle, red border, diagonal red slash
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill={blue} stroke={red} strokeWidth="8" />
            <line x1="18" y1="18" x2="82" y2="82" stroke={red} strokeWidth="8" />
          </svg>
        );

      case 'no-u-turn':
        // Red circle, black curved arrow pointing down then up, slashed in Red
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill={white} stroke={red} strokeWidth="8" />
            {/* Black U-Turn arrow */}
            <path
              d="M 60 65 L 60 40 A 15 15 0 0 0 30 40 L 30 60"
              fill="none"
              stroke={black}
              strokeWidth="7"
              strokeLinecap="round"
            />
            {/* Arrow head */}
            <polygon points="30,68 22,58 38,58" fill={black} />
            {/* Red Diagonal Slash */}
            <line x1="18" y1="18" x2="82" y2="82" stroke={red} strokeWidth="8" />
          </svg>
        );

      case 'no-overtaking':
        // Red circle, black car (right) and red car (left) side by side
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill={white} stroke={red} strokeWidth="8" />
            {/* Black car (right) */}
            <g transform="translate(54, 38) scale(0.65)">
              <rect x="5" y="15" width="26" height="34" rx="6" fill={black} />
              <rect x="8" y="22" width="20" height="12" rx="2" fill={white} opacity="0.7" />
              <rect x="11" y="8" width="14" height="7" rx="2" fill={black} />
              {/* Wheels */}
              <rect x="1" y="12" width="4" height="8" rx="1" fill={black} />
              <rect x="31" y="12" width="4" height="8" rx="1" fill={black} />
              <rect x="1" y="38" width="4" height="8" rx="1" fill={black} />
              <rect x="31" y="38" width="4" height="8" rx="1" fill={black} />
            </g>
            {/* Red car (left) */}
            <g transform="translate(18, 38) scale(0.65)">
              <rect x="5" y="15" width="26" height="34" rx="6" fill={red} />
              <rect x="8" y="22" width="20" height="12" rx="2" fill={white} opacity="0.7" />
              <rect x="11" y="8" width="14" height="7" rx="2" fill={red} />
              {/* Wheels */}
              <rect x="1" y="12" width="4" height="8" rx="1" fill={black} />
              <rect x="31" y="12" width="4" height="8" rx="1" fill={black} />
              <rect x="1" y="38" width="4" height="8" rx="1" fill={black} />
              <rect x="31" y="38" width="4" height="8" rx="1" fill={black} />
            </g>
            {/* Red diagonal slash */}
            <line x1="18" y1="18" x2="82" y2="82" stroke={red} strokeWidth="6" />
          </svg>
        );

      case 'speed-limit-50':
        // Red circle, white inner, "50" in black
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill={white} stroke={red} strokeWidth="8" />
            <text x="50" y="59" fill={black} fontSize="28" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
              50
            </text>
          </svg>
        );

      case 'school-ahead':
        // Yellow triangle, red border, silhouette of two school children
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 95,85 5,85" fill={yellow} stroke={red} strokeWidth="6" strokeLinejoin="round" />
            {/* Children silhouettes */}
            <g fill={black} transform="translate(25, 38) scale(0.9)">
              {/* Child 1 (Older, tall) */}
              <circle cx="15" cy="12" r="4" />
              <path d="M 8,24 L 22,24 L 20,40 L 17,40 L 17,50 L 13,50 L 13,40 L 10,40 Z" />
              {/* Backpack */}
              <rect x="5" y="20" width="5" height="12" rx="1" />
              
              {/* Child 2 (Smaller, leading) */}
              <circle cx="32" cy="18" r="3.5" />
              <path d="M 26,28 L 38,28 L 36,41 L 34,41 L 34,49 L 31,49 L 31,41 L 28,41 Z" />
              {/* Holding hands line or walking leg bend */}
              <line x1="18" y1="26" x2="28" y2="30" stroke={black} strokeWidth="2" />
            </g>
          </svg>
        );

      case 'hospital-ahead':
        // Blue square, white bed, red plus cross
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="5" y="5" width="90" height="90" rx="8" fill={blue} stroke={white} strokeWidth="3" />
            {/* Bed silhouette */}
            <g fill={white} transform="translate(18, 38)">
              {/* Headboard */}
              <rect x="0" y="10" width="6" height="28" rx="1" />
              {/* Mattress */}
              <rect x="6" y="22" width="52" height="6" rx="1" />
              {/* Footboard */}
              <rect x="58" y="18" width="6" height="20" rx="1" />
              {/* Pillow */}
              <rect x="10" y="14" width="10" height="8" rx="2" />
              {/* Person under blanket curve */}
              <path d="M 18,22 C 28,15 48,15 58,22 Z" />
            </g>
            {/* Red Cross */}
            <g transform="translate(50, 26)">
              <rect x="-4" y="-12" width="8" height="24" fill={red} rx="1" />
              <rect x="-12" y="-4" width="24" height="8" fill={red} rx="1" />
            </g>
          </svg>
        );

      case 'pedestrian-crossing':
        // Blue square, white pedestrian icon walking on zebra line
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Blue square */}
            <rect x="5" y="5" width="90" height="90" rx="8" fill={blue} stroke={white} strokeWidth="3" />
            {/* Zebra crossings */}
            <rect x="18" y="70" width="8" height="3" fill={white} />
            <rect x="30" y="70" width="8" height="3" fill={white} />
            <rect x="42" y="70" width="8" height="3" fill={white} />
            <rect x="54" y="70" width="8" height="3" fill={white} />
            <rect x="66" y="70" width="8" height="3" fill={white} />
            <rect x="78" y="70" width="8" height="3" fill={white} />
            
            {/* Pedestrian */}
            <g fill={white} transform="translate(32, 22)">
              {/* Head */}
              <circle cx="18" cy="10" r="5" />
              {/* Body */}
              <path d="M 12,20 L 24,20 L 21,42 L 15,42 Z" />
              {/* Left leg */}
              <path d="M 15,42 L 10,60" stroke={white} strokeWidth="5" strokeLinecap="round" />
              {/* Right leg */}
              <path d="M 21,42 L 26,58" stroke={white} strokeWidth="5" strokeLinecap="round" />
              {/* Left arm swinging back */}
              <path d="M 12,22 L 6,34" stroke={white} strokeWidth="4" strokeLinecap="round" />
              {/* Right arm reaching forward */}
              <path d="M 24,22 L 32,32" stroke={white} strokeWidth="4" strokeLinecap="round" />
            </g>
          </svg>
        );

      case 'railway-crossing':
        // Yellow triangle, red border, steam locomotive train silhouette
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 95,85 5,85" fill={yellow} stroke={red} strokeWidth="6" strokeLinejoin="round" />
            {/* Train Locomotive */}
            <g fill={black} transform="translate(25, 42) scale(0.9)">
              {/* Body */}
              <rect x="10" y="15" width="32" height="15" rx="1" />
              <rect x="34" y="5" width="8" height="12" rx="1" /> {/* Cabin */}
              <rect x="14" y="8" width="5" height="8" /> {/* Chimney */}
              <polygon points="0,30 10,18 10,30" /> {/* Cowcatcher */}
              {/* Wheels */}
              <circle cx="16" cy="33" r="4.5" />
              <circle cx="27" cy="33" r="4.5" />
              <circle cx="38" cy="33" r="4.5" />
              {/* Connector */}
              <line x1="16" y1="33" x2="38" y2="33" stroke={white} strokeWidth="1.5" />
            </g>
          </svg>
        );

      case 'roundabout':
        // Blue circle, 3 curved circular arrows chasing each other
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill={blue} stroke={white} strokeWidth="3" />
            {/* Arrows */}
            <g fill="none" stroke={white} strokeWidth="6" strokeLinecap="round" transform="translate(50, 50)">
              {/* Arrow arcs */}
              <path d="M -18,10 A 21,21 0 0,1 -10,-18" />
              <path d="M 10,-18 A 21,21 0 0,1 18,10" />
              <path d="M 10,18 A 21,21 0 0,1 -18,5" />
              
              {/* Arrow Heads */}
              <polygon points="-10,-24 -3,-14 -15,-14" fill={white} transform="rotate(30, -10, -18)" />
              <polygon points="18,14 25,4 13,4" fill={white} transform="rotate(150, 18, 10)" />
              <polygon points="-18,10 -25,0 -13,0" fill={white} transform="rotate(270, -18, 5)" />
            </g>
          </svg>
        );

      case 'slippery-road':
        // Yellow triangle, skidding car icon
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 95,85 5,85" fill={yellow} stroke={red} strokeWidth="6" strokeLinejoin="round" />
            {/* Car */}
            <g fill={black} transform="translate(38, 36) rotate(15)">
              <rect x="5" y="10" width="18" height="24" rx="4" />
              <rect x="7" y="15" width="14" height="8" rx="1" fill={yellow} />
              <circle cx="8" cy="8" r="2.5" />
              <circle cx="20" cy="8" r="2.5" />
            </g>
            {/* Skid Marks */}
            <path
              d="M 28,75 Q 40,70 42,65 T 50,58 Q 58,58 56,52"
              fill="none"
              stroke={black}
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M 38,75 Q 48,71 49,66 T 58,58 Q 66,58 64,52"
              fill="none"
              stroke={black}
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        );

      case 'narrow-bridge':
        // Yellow triangle, road narrowing
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 95,85 5,85" fill={yellow} stroke={red} strokeWidth="6" strokeLinejoin="round" />
            {/* Road narrowing borders */}
            <path
              d="M 32,76 L 32,60 Q 32,54 42,48 L 42,32"
              fill="none"
              stroke={black}
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M 68,76 L 68,60 Q 68,54 58,48 L 58,32"
              fill="none"
              stroke={black}
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        );

      case 'road-work-ahead':
        // Yellow triangle, worker digging silhouette
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 95,85 5,85" fill={yellow} stroke={red} strokeWidth="6" strokeLinejoin="round" />
            {/* Worker silhouette */}
            <g fill={black} transform="translate(28, 35)">
              {/* Head */}
              <circle cx="22" cy="10" r="4" />
              {/* Torso/Arms */}
              <path d="M 16,14 L 28,14 L 25,28 L 19,28 Z" />
              <path d="M 19,28 L 15,46" stroke={black} strokeWidth="4.5" strokeLinecap="round" />
              <path d="M 24,28 L 26,46" stroke={black} strokeWidth="4.5" strokeLinecap="round" />
              {/* Shovel */}
              <line x1="8" y1="42" x2="35" y2="18" stroke={black} strokeWidth="3" />
              <polygon points="6,45 12,38 12,45" fill={black} />
              {/* Dirt pile */}
              <path d="M 3,46 C 8,40 12,40 16,46 Z" />
            </g>
          </svg>
        );

      case 'dangerous-curve-right':
        // Yellow triangle, arrow bending sharply right
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 95,85 5,85" fill={yellow} stroke={red} strokeWidth="6" strokeLinejoin="round" />
            {/* Curve arrow */}
            <path
              d="M 42,72 L 42,54 Q 42,44 56,42 L 68,42"
              fill="none"
              stroke={black}
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Arrow head */}
            <polygon points="72,42 62,34 62,50" fill={black} />
          </svg>
        );

      case 'steep-ascent':
        // Yellow triangle, 10% incline hill, car climbing
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 95,85 5,85" fill={yellow} stroke={red} strokeWidth="6" strokeLinejoin="round" />
            {/* Incline ramp */}
            <polygon points="20,74 76,74 76,46" fill={black} />
            <text x="48" y="70" fill={white} fontSize="8" fontWeight="bold" fontFamily="sans-serif">
              10%
            </text>
            {/* Miniature car silhouette climbing */}
            <g fill={black} transform="translate(35, 42) rotate(-26) scale(0.6)">
              <rect x="0" y="5" width="16" height="8" rx="2" />
              <rect x="3" y="1" width="10" height="5" rx="1" />
              <circle cx="4" cy="13" r="2.5" />
              <circle cx="12" cy="13" r="2.5" />
            </g>
          </svg>
        );

      case 'steep-descent':
        // Yellow triangle, 10% decline hill, car descending
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 95,85 5,85" fill={yellow} stroke={red} strokeWidth="6" strokeLinejoin="round" />
            {/* Decline ramp */}
            <polygon points="20,74 76,74 20,46" fill={black} />
            <text x="44" y="70" fill={white} fontSize="8" fontWeight="bold" fontFamily="sans-serif">
              10%
            </text>
            {/* Miniature car silhouette descending */}
            <g fill={black} transform="translate(38, 41) rotate(26) scale(0.6)">
              <rect x="0" y="5" width="16" height="8" rx="2" />
              <rect x="3" y="1" width="10" height="5" rx="1" />
              <circle cx="4" cy="13" r="2.5" />
              <circle cx="12" cy="13" r="2.5" />
            </g>
          </svg>
        );

      case 'one-way-right':
        // Blue rectangle, large white arrow pointing right
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="5" y="15" width="90" height="70" rx="8" fill={blue} stroke={white} strokeWidth="3" />
            {/* White arrow pointing right */}
            <path d="M 18,50 L 58,50 L 58,35 L 82,50 L 58,65 L 58,50 Z" fill={white} />
            <text x="50" y="28" fill={white} fontSize="9" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">
              ONE WAY
            </text>
          </svg>
        );

      case 'no-horn':
        // Red circle, black horn, red slash
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill={white} stroke={red} strokeWidth="8" />
            {/* Horn instrument */}
            <g fill={black} transform="translate(20, 36) scale(1.1)">
              {/* Squeeze bulb */}
              <circle cx="10" cy="12" r="8" />
              {/* Pipe */}
              <rect x="18" y="10" width="18" height="4" />
              {/* Trumpet cone */}
              <path d="M 34,12 L 48,2 L 48,22 Z" />
              {/* Sounds lines */}
              <path d="M 52,7 Q 55,12 52,17" stroke={black} strokeWidth="2" strokeLinecap="round" fill="none" />
            </g>
            {/* Red diagonal slash */}
            <line x1="18" y1="18" x2="82" y2="82" stroke={red} strokeWidth="8" />
          </svg>
        );

      case 'traffic-signal-ahead':
        // Yellow triangle, red border, traffic lights inside (Red, Yellow, Green)
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 95,85 5,85" fill={yellow} stroke={red} strokeWidth="6" strokeLinejoin="round" />
            {/* Light post housing */}
            <rect x="42" y="36" width="16" height="38" rx="4" fill={black} />
            {/* Lights */}
            <circle cx="50" cy="43" r="4.5" fill={red} />
            <circle cx="50" cy="55" r="4.5" fill={yellow} />
            <circle cx="50" cy="67" r="4.5" fill="#10B981" /> {/* Green */}
          </svg>
        );

      case 'speed-breaker':
        // Yellow triangle, black double hump speed bump
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 95,85 5,85" fill={yellow} stroke={red} strokeWidth="6" strokeLinejoin="round" />
            {/* Speed bump humps */}
            <path
              d="M 18,74 L 32,74 C 36,74 38,64 42,64 C 46,64 48,74 52,74 C 56,74 58,64 62,64 C 66,64 68,74 82,74"
              fill="none"
              stroke={black}
              strokeWidth="6.5"
              strokeLinecap="round"
            />
          </svg>
        );

      case 'diversion-right':
        // Blue square, stripes, right arrow
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="5" y="5" width="90" height="90" rx="8" fill={blue} stroke={white} strokeWidth="3" />
            {/* Stripes at the bottom */}
            <polygon points="15,80 30,80 45,65 30,65" fill={yellow} />
            <polygon points="35,80 50,80 65,65 50,65" fill={yellow} />
            <polygon points="55,80 70,80 85,65 70,65" fill={yellow} />
            <polygon points="15,65 30,65 20,55 5,55" fill="none" />
            {/* Large White arrow pointing right */}
            <path d="M 20,40 L 55,40 L 55,25 L 80,45 L 55,65 L 55,50 L 20,50 Z" fill={white} />
          </svg>
        );

      case 'bus-stop':
        // Blue square with white bus silhouette
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="5" y="5" width="90" height="90" rx="8" fill={blue} stroke={white} strokeWidth="3" />
            {/* Bus profile */}
            <g fill={white} transform="translate(22, 30)">
              <rect x="0" y="5" width="56" height="28" rx="5" />
              <rect x="5" y="9" width="12" height="10" rx="1" fill={blue} />
              <rect x="22" y="9" width="12" height="10" rx="1" fill={blue} />
              <rect x="39" y="9" width="12" height="10" rx="1" fill={blue} />
              {/* Wheel cuts */}
              <circle cx="12" cy="33" r="5" fill={white} />
              <circle cx="12" cy="33" r="2.5" fill={black} />
              <circle cx="44" cy="33" r="5" fill={white} />
              <circle cx="44" cy="33" r="2.5" fill={black} />
              {/* Lights */}
              <rect x="-2" y="24" width="2" height="4" rx="1" />
              <rect x="56" y="24" width="2" height="4" rx="1" />
            </g>
          </svg>
        );

      case 't-junction':
        // Yellow triangle, T shape
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 95,85 5,85" fill={yellow} stroke={red} strokeWidth="6" strokeLinejoin="round" />
            {/* T-junction lines */}
            <rect x="45" y="48" width="10" height="28" fill={black} />
            <rect x="26" y="38" width="48" height="10" fill={black} />
          </svg>
        );

      case 'crossroad':
        // Yellow triangle, cross '+' shape
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 95,85 5,85" fill={yellow} stroke={red} strokeWidth="6" strokeLinejoin="round" />
            {/* Crossroad lines */}
            <rect x="45" y="30" width="10" height="46" fill={black} rx="1" />
            <rect x="27" y="48" width="46" height="10" fill={black} rx="1" />
          </svg>
        );

      case 'y-junction':
        // Yellow triangle, Y shape
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 95,85 5,85" fill={yellow} stroke={red} strokeWidth="6" strokeLinejoin="round" />
            {/* Y-junction paths */}
            <path
              d="M 50,76 L 50,52 L 32,34 M 50,52 L 68,34"
              fill="none"
              stroke={black}
              strokeWidth="10"
              strokeLinecap="square"
            />
          </svg>
        );

      case 'dead-end':
        // Blue square, T-shape with a red top bar
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="5" y="5" width="90" height="90" rx="8" fill={blue} stroke={white} strokeWidth="3" />
            {/* Road lines */}
            <rect x="44" y="36" width="12" height="42" fill={white} />
            <rect x="26" y="24" width="48" height="12" fill={red} rx="1" />
          </svg>
        );

      case 'parking':
        // Blue square, white P
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="5" y="5" width="90" height="90" rx="8" fill={blue} stroke={white} strokeWidth="3" />
            <text x="50" y="72" fill={white} fontSize="58" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              P
            </text>
          </svg>
        );

      case 'u-turn-permitted':
        // Blue square, white curved u-turn arrow
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="5" y="5" width="90" height="90" rx="8" fill={blue} stroke={white} strokeWidth="3" />
            {/* U-Turn arrow */}
            <path
              d="M 62,68 L 62,38 A 18 18 0 0 0 26,38 L 26,62"
              fill="none"
              stroke={white}
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Arrow head */}
            <polygon points="26,72 17,60 35,60" fill={white} />
          </svg>
        );

      default:
        // Fallback placeholder sign
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill={white} stroke={black} strokeWidth="4" />
            <text x="50" y="58" fill={black} fontSize="32" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              ?
            </text>
          </svg>
        );
    }
  };

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-block flex items-center justify-center shrink-0 ${className}`}
    >
      {renderSignContent()}
    </div>
  );
}
