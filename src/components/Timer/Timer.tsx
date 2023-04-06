
export default function Timer () {
  return (
    <div x-data="{ circumference: 20 * 2 * Math.PI, percent: 10 }">

      <div className="flex items-center justify-center -m-6 overflow-hidden bg-[#161932] rounded-full">
        <svg className="w-32 h-32 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
          <circle
            className='text-[#F87070]'
            stroke-width="4"
            stroke-dasharray='circumference'
            stroke-dashoffset='circumference - percent / 100 * circumference'
            stroke-linecap='round'
            stroke="currentColor"
            fill="transparent"
            r="50"
            cx="60"
            cy="60"
          />

        </svg>
        <span className="absolute text-2xl" x-text="20%"></span>
      </div>
    </div>
  )
}
