const Dates = ({ dispatchCustomReducer }: any) => {
    return (
        <div className="w-full flex ">
            <div className="flex flex-col items-start">
                <label className="font-bold" htmlFor="">
                    Start date:
                </label>
                <input type="date" onChange={(e) => dispatchCustomReducer({ type: 'START_DATE', start_on: e.target.value })} />
            </div>

            <div className="flex  flex-col items-start ml-5">
                <label className="font-bold	" htmlFor="">
                    End date:
                </label>
                <input type="date" onChange={(e) => dispatchCustomReducer({ type: 'END_DATE', due_on: e.target.value })} />
            </div>
        </div>
    )
}

export default Dates