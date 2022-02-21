import * as React from 'react'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/solid'
import {ILang} from "../../models/ILang";

const classNames: (cl_1: string, cl_2: string) => string = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

type DropdownProps<T> = {
  items: Array<T>;
  selected: T;
  onSelect: (option: T) => void;
}

const Dropdown: React.FC<DropdownProps<ILang>> = ({items, onSelect, selected}) => {


  return (
    <Menu as="div" className="relative inline-block text-left w-28">
      <div>
        <Menu.Button
          className="inline-flex justify-center w-full rounded-md border border-gray-800 shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-gray-100 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-blue-600">
          {selected.name}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true"/>
        </Menu.Button>
      </div>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 divide-y divide-gray-700 focus:outline-none">
          <div className="py-1">
            {items.map((item) => (
              <Menu.Item key={item.name} onClick={() => onSelect(item)}>
                <a
                  href="#"
                  className={classNames(
                    item.code === selected.code ? 'bg-gray-900 text-gray-100' : 'text-gray-100',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {item.name} - {item?.nativeName}
                </a>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default React.memo<DropdownProps<ILang>>(Dropdown);
