function Header() {
    return (
      <main className="border-gray-50">
        <div className="  flex flex-wrap gap-4 justify-start border-b h-16 pt-5 mx-12 ">
          {/* Dropdowns for categories */}
          <div className="  flex-1 sm:w-full md:w-32">
            <select name="groceries" className=" sel w-full border border-gray-500  cursor-pointer bg-cyan-900 text-white px-2">
              <option value="potato" className="bg-slate-50  cursor-pointer text-black">Groceries</option>
              <option value="tomato" className="bg-slate-50 text-black  cursor-pointer">Tomato</option>
              <option value="onion" className="bg-slate-50 text-black  cursor-pointer">Onion</option>
              <option value="ginger" className="bg-slate-50 text-black  cursor-pointer">Ginger</option>
              <option value="garlic" className="bg-slate-50 text-black  cursor-pointer">Garlic</option>
              <option value="potato" className="bg-slate-50 text-black  cursor-pointer">Potato</option>
              <option value="chills" className="bg-slate-50 text-black  cursor-pointer">Chills</option>
              <option value="ladyFingers" className="bg-slate-50 text-black  cursor-pointer">Lady Fingers</option>
            </select>
          </div>
  
          <div className="  flex-1 sm:w-full md:w-32">
            <select name="Premium fruits" className=" select w-full border border-gray-200 hover:bg-[#c2c5aa] cursor-pointer bg-slate-200 text-slate-900 px-2">
              <option value="Premium Fruits" className="bg-slate-50 text-black  cursor-pointer">Premium Fruits</option>
              <option value="apples" className="bg-slate-50 text-black  cursor-pointer">Apples</option>
              <option value="Gava" className="bg-slate-50 text-black  cursor-pointer">Gava</option>
              <option value="PineApple" className="bg-slate-50 text-black  cursor-pointer">Pineapple</option>
              <option value="Grapes" className="bg-slate-50 text-black  cursor-pointer">Grapes</option>
              <option value="oranges" className="bg-slate-50 text-black  cursor-pointer">Oranges</option>
              <option value="charry" className="bg-slate-50 text-black  cursor-pointer">Cherry</option>
              <option value="strawberry" className="bg-slate-50 text-black  cursor-pointer">Strawberry</option>
            </select>
          </div>
  
          <div className="  flex-1 sm:w-full md:w-32">
            <select name="Home & Kitchen" className=" select w-full border border-slate-200 hover:bg-[#c2c5aa] cursor-pointer bg-slate-200 text-slate-900 px-2">
              <option value="Home & Kitchen" className="bg-slate-50 text-black  cursor-pointer">Home & Kitchen</option>
              <option value="DecorationPeaces" className="bg-slate-50 text-black  cursor-pointer">Decoration Pieces</option>
              <option value="KitchenItems" className="bg-slate-50 text-black  cursor-pointer">Kitchen Items</option>
              <option value="Curtains" className="bg-slate-50 text-black  cursor-pointer">Curtains</option>
            </select>
          </div>
  
          <div className=" flex-1 sm:w-full md:w-32">
            <select name="Fashion" className=" select w-full border border-slate-200 hover:bg-[#c2c5aa] cursor-pointer bg-slate-200 text-slate-900 px-2">
              <option value="Clothes" className="bg-slate-50 text-black  cursor-pointer">Clothes</option>
              <option value="Shoes" className="bg-slate-50 text-black  cursor-pointer">Shoes</option>
              <option value="HandBags" className="bg-slate-50 text-black  cursor-pointer">Hand Bags</option>
              <option value="Jewelry" className="bg-slate-50 text-black v">Jewelry</option>
            </select>
          </div>
  
          <div className="  flex-1 sm:w-full md:w-32">
            <select name="Electronics" className=" select w-full  cursor-pointer   border border-slate-200 hover:bg-[#c2c5aa] bg-slate-200 text-slate-900 px-2">
              <option value="Electronics" className="bg-slate-50 text-black  cursor-pointer">Electronics</option>
              <option value="Refrigerators" className="bg-slate-50 text-black  cursor-pointer">Refrigerators</option>
              <option value="WashingMachines" className="bg-slate-50 text-black  cursor-pointer">Washing Machines</option>
              <option value="Fans" className="bg-slate-50 text-black  cursor-pointer">Fans</option>
              <option value="DishWashers" className="bg-slate-50 text-black  cursor-pointer">Dishwashers</option>
              <option value="AirConditions" className="bg-slate-50 text-black  cursor-pointer">Air Conditioners</option>
              <option value="ElectricStoves" className="bg-slate-50 text-black  cursor-pointer">Electric Stoves</option>
            </select>
          </div>
  
          <div className=" flex-1 sm:w-full md:w-32  cursor-pointer">
            <select name="Beauty" className=" select  w-full border  cursor-pointer border-slate-200 hover:bg-[#c2c5aa] bg-slate-200 text-slate-900 px-2">
              <option value="Beauty" className="bg-slate-50 text-black">Beauty</option>
              <option value="SkinCare" className="bg-slate-50 text-black">Skin Care</option>
              <option value="Massager" className="bg-slate-50 text-black">Massager</option>
              <option value="Makeup" className="bg-slate-50 text-black">Makeup</option>
            </select>
          </div>
  
          <div className="  flex-1 sm:w-full md:w-32">
            <select name="Home Improvement" className=" select w-full border  cursor-pointer border-slate-200 hover:bg-[#c2c5aa] bg-slate-200 text-slate-900 px-2">
              <option value="FrozenMeals" className="bg-slate-50 text-black">Frozen Meals</option>
              <option value="BeefDumplings" className="bg-slate-50 text-black">Beef Dumplings</option>
              <option value="MashedPotatoes" className="bg-slate-50 text-black">Mashed Potatoes</option>
              <option value="ChickenTenders" className="bg-slate-50 text-black">Chicken Tenders</option>
              <option value="ChickenKebab" className="bg-slate-50 text-black">Chicken Rashmi Kebab</option>
              <option value="ChickenDumplings" className="bg-slate-50 text-black">Chicken Dumplings</option>
              <option value="ChickenRolls" className="bg-slate-50 text-black">Chicken Rolls</option>
            </select>
          </div>
  
          <div className="flex-1 sm:w-full md:w-32 ">
            <select name="Sports & Toys" className=" select w-full border  cursor-pointer border-slate-200 hover:bg-[#c2c5aa] bg-slate-200 text-slate-900 px-2">
              <option value="SportsToys" className="bg-slate-50 text-black">Sports & Toys</option>
              <option value="ElectronicToys" className="bg-slate-50 text-black">Electronic Toys</option>
              <option value="EducationalToys" className="bg-slate-50 text-black">Educational Toys</option>
              <option value="Dolls" className="bg-slate-50 text-black">Dolls</option>
              <option value="SportsItems" className="bg-slate-50 text-black">Sports Items</option>
            </select>
          </div>
        </div>
      </main>
    );
  }
  
  export default Header;
  