

function FormProfile() {
    const currentYear = new Date().getFullYear();

    const renderDateOptions = () => {
        const dateOptions = [
            <option key={0} value="" disabled selected>
                Day
            </option>,
        ];
        for (let i = 1; i <= 31; i++) {
            dateOptions.push(
                <option key={i} value={i}>
                    {i}
                </option>
            );
        }
        return dateOptions;
    };

    const renderMonthOptions = () => {
        const monthOptions = [
            <option key={0} value="" disabled selected>
                Month
            </option>,
        ];
        for (let i = 1; i <= 12; i++) {
            monthOptions.push(
                <option key={i} value={i}>
                    {new Date(2000, i - 1, 1).toLocaleString("default", {
                        month: "long",
                    })}
                </option>
            );
        }
        return monthOptions;
    };

    const renderYearOptions = () => {
        const yearOptions = [
            <option key={0} value="" disabled selected>
                Year
            </option>,
        ];
        for (let i = currentYear; i >= 1960; i--) {
            yearOptions.push(
                <option key={i} value={i}>
                    {i}
                </option>
            );
        }
        return yearOptions;
    };

  return (
    <>
       <form className="w-full mb-[1rem] text-[15px]">
                        <div className= "flex  min-[750px]:gap-[.2rem] min-[880px]:gap-[1rem] w-full mb-[1rem]  max-[750px]:flex-wrap">
                            <div className="min-[750px]:w-[49%] w-full">
                                <label>First name</label>
                                <br />
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="w-full border-[1px] rounded-lg mt-[.5rem] p-2"
                                />
                            </div>
                            <div className="min-[750px]:w-[49%] w-full">
                                <label>Last name</label>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="w-full border-[1px] rounded-lg mt-[.5rem] p-2"
                                />
                            </div>
                        </div>
                        <div className="flex min-[750px]:gap-[.2rem] min-[880px]:gap-[1rem] items-center w-full mb-[1rem] max-[750px]:flex-wrap">
                            <div className="min-[750px]:w-[49%] w-full">
                                <label>E-mail</label>
                                <br />
                                <input
                                    type="email"
                                    placeholder="E-mail"
                                    className="w-full border-[1px] rounded-lg mt-[.5rem] p-2"
                                />
                            </div>
                            <div className="min-[750px]:w-[49%] w-full">
                                <label>Date of birth</label>
                                <br />
                                <div className="flex min-[750px]:gap-[.1rem] lg:gap-[1rem] gap-[.5rem] items-center flex-wrap">
                                    <select
                                        className="border-[1px] rounded-lg p-2 outline-none mt-[.5rem] w-[70px]"
                                    >
                                        {renderDateOptions()}
                                    </select>
                                    <select
                                        className="border-[1px] rounded-lg p-2 outline-none mt-[.5rem] w-[120px]"
                                    >
                                        {renderMonthOptions()}
                                    </select>
                                    <select
                                        className="border-[1px] rounded-lg p-2 outline-none mt-[.5rem] w-[70px]"
                                    >
                                        {renderYearOptions()}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-[1rem] w-full mb-[1rem]">
                            <div className="min-[750px]:w-[49%] w-full">
                                <label>Address</label>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Address"
                                    className="w-full border-[1px] rounded-lg mt-[.5rem] p-2"
                                />
                            </div>
                        </div>
                    </form>
    </>
  )
}

export default FormProfile