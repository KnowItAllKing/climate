export type DataInput = [[],[],[],[],[],[],[],[],[],[],[],[]];
export type DataType = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
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
    datasets: [{
      label: 'January',
      data: i1,
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
    },
    {
      label: 'February',
      data: i2,
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    },
    {
      label: 'March',
      data: i3,
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1
    },
    {
      label: 'April',
      data: i4,
      borderColor:  'rgba(75, 192, 192, 1)',
      borderWidth: 1
    },
    {
      label: 'May',
      data: i5,
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1
    },
    {
      label: 'June',
      data: i6,
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1
    },
    {
      label: 'July',
      data: i7,
      borderColor: 'rgba(255, 99, 132, 0.2)',
      borderWidth: 1
    },
    {
      label: 'August',
      data: i8,
      borderColor: 'rgba(54, 162, 235, 0.2)',
      borderWidth: 1
    },
    {
      label: 'September',
      data: i9,
      borderColor: 'rgba(255, 206, 86, 0.2)',
      borderWidth: 1
    },
    {
      label: 'October',
      data: i10,
      borderColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 1
    },
    {
      label: 'November',
      data: i11,
      borderColor: 'rgba(153, 102, 255, 0.2)',
      borderWidth: 1
    },
    {
      label: 'December',
      data: i12,
      borderColor: 'rgba(255, 159, 64, 0.2)',
      borderWidth: 1
    },
    ]
  }
};