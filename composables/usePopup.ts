export const usePopup = (popName: number) => {
  const today = new Date();
  let todayDate = today.getDate();
  let tomorrow = new Date(today.setDate(todayDate + 1));

  const isNoShowPopup = useCookie('isNoShowPopup_' + popName, {
    expires: tomorrow
  });

  return {
    isNoShowPopup
  };
};
