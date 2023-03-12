import {KeyboardInterface} from "ts/interfaces/keyboard";

export const keyboard: KeyboardInterface = {
    main: [
        [
            {
                name: 'esc',
                height: 'h-10'
            },
            {
                name: 'F1',
                height: 'h-10'
            },
            {
                name: 'F2',
                height: 'h-10'
            },
            {
                name: 'F3',
                height: 'h-10'
            },
            {
                name: 'F4',
                height: 'h-10'
            },
            {
                name: 'F4',
                height: 'h-10'
            },
            {
                name: 'F5',
                height: 'h-10'
            },
            {
                name: 'F6',
                height: 'h-10'
            },
            {
                name: 'F7',
                height: 'h-10'
            },
            {
                name: 'F8',
                height: 'h-10'
            },
            {
                name: 'F9',
                height: 'h-10'
            },
            {
                name: 'F10',
                height: 'h-10'
            },
            {
                name: 'F11',
                height: 'h-10'
            },
            {
                name: 'F12',
                height: 'h-10'
            },
            {
                icon: "EjectIcon",
                height: 'h-10'
            }
        ],
        [
            {
                name: '~',
                secondaryName: '`'
            },
            {
                name: '!',
                secondaryName: '1'

            },
            {
                name: '@',
                secondaryName: '2'

            },
            {
                name: '#',
                secondaryName: '3'
            },
            {
                name: '$',
                secondaryName: '4'
            },
            {
                name: '%',
                secondaryName: "5",
            },
            {
                name: '^',
                secondaryName: '6'
            },
            {
                name: '&',
                secondaryName: '7'
            },
            {
                name: '*',
                secondaryName: '8'
            },
            {
                name: '(',
                secondaryName: "9"
            },
            {
                name: ')',
                secondaryName: '0'
            },
            {
                name: '-',
                secondaryName: '\u003d'
            },
            {
                name: '+',
                secondaryName: '='
            },
            {
                name: 'Delete',
                width: 'w-48',
                place: 'items-end'
            }
        ],
        [
            {
                name: 'Tab',
                width: 'w-44',
                place: 'items-start'
            },
            {
                name: 'Q'
            },
            {
                name: 'W'
            },
            {
                name: 'E'
            },
            {
                name: 'R'
            },
            {
                name: 'T'
            },
            {
                name: 'Y'
            },
            {
                name: 'U'
            },
            {
                name: 'I'
            },
            {
                name: 'O'
            },
            {
                name: 'P'
            },
            {
                name: '{',
                secondaryName: '['
            },
            {
                name: '}',
                secondaryName: ']'
            },
            {
                name: '|',
                secondaryName: '\\'
            }
        ],
        [
            {
                name: 'Capslock',
                width: 'w-48',
                place: 'items-start'
            },
            {
                name: 'A'
            },
            {
                name: 'S'
            },
            {
                name: 'D'
            },
            {
                name: 'F'
            },
            {
                name: 'G'
            },
            {
                name: 'H'
            },
            {
                name: 'J'
            },
            {
                name: 'K'
            },
            {
                name: 'L'
            },
            {
                name: ':',
                secondaryName: ';'
            },
            {
                name: '"',
                secondaryName: "'"
            },
            {
                name: 'Return',
                width: 'w-48',
                place: 'items-end'
            }
        ],
        [
            {
                name: 'Shift',
                width: 'w-52',
                place: 'items-start'
            },
            {
                name: 'Z'
            },
            {
                name: 'X'
            },
            {
                name: 'C'
            },
            {
                name: 'V'
            },
            {
                name: 'B'
            },
            {
                name: 'N'
            },
            {
                name: 'M'
            },
            {
                name: '<',
                secondaryName: ','
            },
            {
                name: '>',
                secondaryName: '.'
            },
            {
                name: '?',
                secondaryName: '/'
            },
            {
                name: 'Shift',
                width: 'w-52',
                place: 'items-end'
            }
        ],
        [
            {
                name: 'Fn'
            },
            {
                name: 'Ctrl',
                width: 'w-20',
            },
            {
                name: 'Option',
                width: 'w-20',
            },
            {
                name: 'Command',
                width: 'w-28',
            },
            {
                name: '',
                width: 'w-3/6'
            },
            {
                name: 'Command',
                width: 'w-28',
            },
            {
                name: 'Option',
                width: 'w-20',
            },
        ]
    ],
    secondary: [
        [
            {
                name: 'PrtScr',
                fontSize: 'text-lg'
            },
            {
                name: 'Scroll',
                secondaryName: 'lock',
                fontSize: 'text-lg'
            },
            {
                name: 'Pause',
                fontSize: 'text-lg'
            }
        ],
        [
            {
                name: 'Insert',
                fontSize: 'text-lg'
            },
            {
                name: 'Home',
                fontSize: 'text-lg'
            },
            {
                name: 'Page',
                secondaryName: "Up",
                fontSize: 'text-lg'
            }
        ],
        [
            {
                name: 'Delete',
                fontSize: 'text-lg'
            },
            {
                name: 'End',
                fontSize: 'text-lg'
            },
            {
                name: 'Page',
                secondaryName: "Down",
                fontSize: 'text-lg'
            }
        ],
        [
            {
                name: 'Num',
                secondaryName: "Lock",
                fontSize: 'text-lg'
            }
        ],
        [
            {
                icon: 'ArrowDropUpIcon',
                height: 'h-10'
            }
        ],
        [
            {
                icon: 'ArrowLeftIcon',
                height: 'h-10'
            },

            {
                icon: 'ArrowDropDownIcon',
                height: 'h-10'
            },
            {
                icon: 'ArrowRightIcon',
                height: 'h-10'
            }

        ]
    ]
}

