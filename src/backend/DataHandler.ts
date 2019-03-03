export type DataInput = [[],[],[],[],[],[],[],[],[],[],[],[]];
export type DataType = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  options: {
    pan: {
      enabled: boolean,
      mode: string,
      speed: number,
      threshold: number
    },
    zoom: {
      enabled: boolean,
      mode: string
    }
  };
  datasets: {
    label: string,
    borderColor: string,
     data: string[],
      borderWidth: number
  }[];
};
export function handle(data: DataInput): DataType {
  const [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12] = data;
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'],
    options: {
      pan: {
        enabled: true,
        mode: 'x',
        speed: 10,
        threshold: 10
      },
      zoom: {
        enabled: true,
        mode: 'y'
      }
    },
    datasets: [{
      label: 'January',
      data: i1,
      borderColor: 'rgba(234, 141, 11, 1)',
      borderWidth: 1,
    },
    {
      label: 'February',
      data: i2,
      borderColor: 'rgba(175, 234, 11, 1)',
      borderWidth: 1
    },
    {
      label: 'March',
      data: i3,
      borderColor: 'rgba(11, 234, 181, 1)',
      borderWidth: 1
    },
    {
      label: 'April',
      data: i4,
      borderColor:  'rgba(11, 148, 234, 1)',
      borderWidth: 1
    },
    {
      label: 'May',
      data: i5,
      borderColor: 'rgba(81, 11, 234, 1)',
      borderWidth: 1
    },
    {
      label: 'June',
      data: i6,
      borderColor: 'rgba(200, 11, 234, 1)',
      borderWidth: 1
    },
    {
      label: 'July',
      data: i7,
      borderColor: 'rgba(234, 11, 11, 1)',
      borderWidth: 1
    },
    {
      label: 'August',
      data: i8,
      borderColor: 'rgba(19, 107, 6, 1)',
      borderWidth: 1
    },
    {
      label: 'September',
      data: i9,
      borderColor: 'rgba(107, 29, 6, 1)',
      borderWidth: 1
    },
    {
      label: 'October',
      data: i10,
      borderColor: 'rgba(91, 3, 74, 1)',
      borderWidth: 1
    },
    {
      label: 'November',
      data: i11,
      borderColor: 'rgba(57, 86, 107, 1)',
      borderWidth: 1
    },
    {
      label: 'December',
      data: i12,
      borderColor: 'rgba(73, 58, 104, 1)',
      borderWidth: 1
    },
    ]
  }
};