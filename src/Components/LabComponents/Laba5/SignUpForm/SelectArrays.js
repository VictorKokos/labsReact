
export const pushYears = (mass) =>
{
    for (let i= 2022; i>=1900; i--)
   {
      mass.push(i)
      
   }
   return mass
}

export const pushMonths = (mass) =>
{
    for (let i= 1; i<=12; i++)
   {
      mass.push(i)
      
   }
   return mass
}
export const pushDays = (mass) =>
{
    for (let i= 1; i<=31; i++)
   {
      mass.push(i)
      
   }
   return mass
}

