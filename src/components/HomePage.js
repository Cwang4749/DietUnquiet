import React /*, { useEffect }*/ from "react";
import NavBar from "./NavBar";
import Overview from "./Overview";
import RecipeSearch from "./RecipeSearch";
import ExerciseSearch from "./ExerciseSearch";
import Profile from "./Profile";
import Locator from "./Locator";
import Calorie from "./Calorie"; 
import { useParams, useNavigate } from "react-router-dom";
import MentalHealth from "./MentalHealth";

const renderContent = (props, state) => {
  switch (state) {
    case "overview":
      return (
        <Overview
        exercise_dict={props.exercise_dict} exercises={props.exercises} setexercises={props.setexercises} part_checks={props.part_checks} setpart_checks={props.setpart_checks} exercise_data={props.exercise_data} setexercise_data={props.setexercise_data} data={props.data} setdata={props.setdata} filter_check={props.filter_check} setfilter_check={props.setfilter_check} allergy_check={props.allergy_check} set_allergycheck={props.set_allergycheck} ingredients_to_avoid={props.ingredients_to_avoid} set_ingredients_to_avoid={props.set_ingredients_to_avoid} ingredient_names={props.ingredient_names} set_ingredient_names={props.set_ingredient_names} filters={props.filters} setFilter={props.setFilter} firstName={props.firstName} setFirstName={props.setFirstName} lastName={props.lastName} setLastName={props.setLastName} age={props.age} setAge={props.setAge} gender={props.gender} setGender={props.setGender} weight={props.weight} setWeight={props.setWeight} height={props.height} setHeight={props.setHeight} allergies={props.allergies} setAllergies={props.setAllergies} injury={props.injury} setInjury={props.setInjury} userID={props.userID} setUserID={props.setUserID}
        />
      );
    case "profile":
      return (
        <Profile
        exercise_dict={props.exercise_dict} exercises={props.exercises} setexercises={props.setexercises} part_checks={props.part_checks} setpart_checks={props.setpart_checks} exercise_data={props.exercise_data} setexercise_data={props.setexercise_data} data={props.data} setdata={props.setdata} filter_check={props.filter_check} setfilter_check={props.setfilter_check} allergy_check={props.allergy_check} set_allergycheck={props.set_allergycheck} ingredients_to_avoid={props.ingredients_to_avoid} set_ingredients_to_avoid={props.set_ingredients_to_avoid} ingredient_names={props.ingredient_names} set_ingredient_names={props.set_ingredient_names} filters={props.filters} setFilter={props.setFilter} firstName={props.firstName} setFirstName={props.setFirstName} lastName={props.lastName} setLastName={props.setLastName} age={props.age} setAge={props.setAge} gender={props.gender} setGender={props.setGender} weight={props.weight} setWeight={props.setWeight} height={props.height} setHeight={props.setHeight} allergies={props.allergies} setAllergies={props.setAllergies} injury={props.injury} setInjury={props.setInjury} userID={props.userID} setUserID={props.setUserID}
        />
      );
    case "recipesearch":
      return (
        <RecipeSearch
        exercise_dict={props.exercise_dict} exercises={props.exercises} setexercises={props.setexercises} part_checks={props.part_checks} setpart_checks={props.setpart_checks} exercise_data={props.exercise_data} setexercise_data={props.setexercise_data} data={props.data} setdata={props.setdata} filter_check={props.filter_check} setfilter_check={props.setfilter_check} allergy_check={props.allergy_check} set_allergycheck={props.set_allergycheck} ingredients_to_avoid={props.ingredients_to_avoid} set_ingredients_to_avoid={props.set_ingredients_to_avoid} ingredient_names={props.ingredient_names} set_ingredient_names={props.set_ingredient_names} filters={props.filters} setFilter={props.setFilter} firstName={props.firstName} setFirstName={props.setFirstName} lastName={props.lastName} setLastName={props.setLastName} age={props.age} setAge={props.setAge} gender={props.gender} setGender={props.setGender} weight={props.weight} setWeight={props.setWeight} height={props.height} setHeight={props.setHeight} allergies={props.allergies} setAllergies={props.setAllergies} injury={props.injury} setInjury={props.setInjury} userID={props.userID} setUserID={props.setUserID}
        />
      );
    case "exercisesearch":
      return <ExerciseSearch
      exercise_dict={props.exercise_dict} exercises={props.exercises} setexercises={props.setexercises} part_checks={props.part_checks} setpart_checks={props.setpart_checks} exercise_data={props.exercise_data} setexercise_data={props.setexercise_data} data={props.data} setdata={props.setdata} filter_check={props.filter_check} setfilter_check={props.setfilter_check} allergy_check={props.allergy_check} set_allergycheck={props.set_allergycheck} ingredients_to_avoid={props.ingredients_to_avoid} set_ingredients_to_avoid={props.set_ingredients_to_avoid} ingredient_names={props.ingredient_names} set_ingredient_names={props.set_ingredient_names} filters={props.filters} setFilter={props.setFilter} firstName={props.firstName} setFirstName={props.setFirstName} lastName={props.lastName} setLastName={props.setLastName} age={props.age} setAge={props.setAge} gender={props.gender} setGender={props.setGender} weight={props.weight} setWeight={props.setWeight} height={props.height} setHeight={props.setHeight} allergies={props.allergies} setAllergies={props.setAllergies} injury={props.injury} setInjury={props.setInjury} userID={props.userID} setUserID={props.setUserID}
      />;
    case "locator":
      return <Locator
      exercise_dict={props.exercise_dict} exercises={props.exercises} setexercises={props.setexercises} part_checks={props.part_checks} setpart_checks={props.setpart_checks} exercise_data={props.exercise_data} setexercise_data={props.setexercise_data} data={props.data} setdata={props.setdata} filter_check={props.filter_check} setfilter_check={props.setfilter_check} allergy_check={props.allergy_check} set_allergycheck={props.set_allergycheck} ingredients_to_avoid={props.ingredients_to_avoid} set_ingredients_to_avoid={props.set_ingredients_to_avoid} ingredient_names={props.ingredient_names} set_ingredient_names={props.set_ingredient_names} filters={props.filters} setFilter={props.setFilter} firstName={props.firstName} setFirstName={props.setFirstName} lastName={props.lastName} setLastName={props.setLastName} age={props.age} setAge={props.setAge} gender={props.gender} setGender={props.setGender} weight={props.weight} setWeight={props.setWeight} height={props.height} setHeight={props.setHeight} allergies={props.allergies} setAllergies={props.setAllergies} injury={props.injury} setInjury={props.setInjury} userID={props.userID} setUserID={props.setUserID}
      />;
    case "calorie":
      return <Calorie
      exercise_dict={props.exercise_dict} exercises={props.exercises} setexercises={props.setexercises} part_checks={props.part_checks} setpart_checks={props.setpart_checks} exercise_data={props.exercise_data} setexercise_data={props.setexercise_data} data={props.data} setdata={props.setdata} filter_check={props.filter_check} setfilter_check={props.setfilter_check} allergy_check={props.allergy_check} set_allergycheck={props.set_allergycheck} ingredients_to_avoid={props.ingredients_to_avoid} set_ingredients_to_avoid={props.set_ingredients_to_avoid} ingredient_names={props.ingredient_names} set_ingredient_names={props.set_ingredient_names} filters={props.filters} setFilter={props.setFilter} firstName={props.firstName} setFirstName={props.setFirstName} lastName={props.lastName} setLastName={props.setLastName} age={props.age} setAge={props.setAge} gender={props.gender} setGender={props.setGender} weight={props.weight} setWeight={props.setWeight} height={props.height} setHeight={props.setHeight} allergies={props.allergies} setAllergies={props.setAllergies} injury={props.injury} setInjury={props.setInjury} userID={props.userID} setUserID={props.setUserID}
    />;
    case "MentalHealth":
      return (
          <MentalHealth
      exercise_dict={props.exercise_dict} exercises={props.exercises} setexercises={props.setexercises} part_checks={props.part_checks} setpart_checks={props.setpart_checks} exercise_data={props.exercise_data} setexercise_data={props.setexercise_data} data={props.data} setdata={props.setdata} filter_check={props.filter_check} setfilter_check={props.setfilter_check} allergy_check={props.allergy_check} set_allergycheck={props.set_allergycheck} ingredients_to_avoid={props.ingredients_to_avoid} set_ingredients_to_avoid={props.set_ingredients_to_avoid} ingredient_names={props.ingredient_names} set_ingredient_names={props.set_ingredient_names} filters={props.filters} setFilter={props.setFilter} firstName={props.firstName} setFirstName={props.setFirstName} lastName={props.lastName} setLastName={props.setLastName} age={props.age} setAge={props.setAge} gender={props.gender} setGender={props.setGender} weight={props.weight} setWeight={props.setWeight} height={props.height} setHeight={props.setHeight} allergies={props.allergies} setAllergies={props.setAllergies} injury={props.injury} setInjury={props.setInjury} userID={props.userID} setUserID={props.setUserID}
          />
      );
    default:
      return (
        <Overview
        exercise_dict={props.exercise_dict} exercises={props.exercises} setexercises={props.setexercises} part_checks={props.part_checks} setpart_checks={props.setpart_checks} exercise_data={props.exercise_data} setexercise_data={props.setexercise_data} data={props.data} setdata={props.setdata} filter_check={props.filter_check} setfilter_check={props.setfilter_check} allergy_check={props.allergy_check} set_allergycheck={props.set_allergycheck} ingredients_to_avoid={props.ingredients_to_avoid} set_ingredients_to_avoid={props.set_ingredients_to_avoid} ingredient_names={props.ingredient_names} set_ingredient_names={props.set_ingredient_names} filters={props.filters} setFilter={props.setFilter} firstName={props.firstName} setFirstName={props.setFirstName} lastName={props.lastName} setLastName={props.setLastName} age={props.age} setAge={props.setAge} gender={props.gender} setGender={props.setGender} weight={props.weight} setWeight={props.setWeight} height={props.height} setHeight={props.setHeight} allergies={props.allergies} setAllergies={props.setAllergies} injury={props.injury} setInjury={props.setInjury} userID={props.userID} setUserID={props.setUserID}
        />
      );
  }
};

const HomePage = (props) => {
  const { state } = useParams();

  return (
    <div className="container-fluid main-page">
      <div className="row">
        <div className="col-2 nav-bar">
          <NavBar exercise_dict={props.exercise_dict} exercises={props.exercises} setexercises={props.setexercises} part_checks={props.part_checks} setpart_checks={props.setpart_checks} exercise_data={props.exercise_data} setexercise_data={props.setexercise_data} data={props.data} setdata={props.setdata} filter_check={props.filter_check} setfilter_check={props.setfilter_check} allergy_check={props.allergy_check} set_allergycheck={props.set_allergycheck} ingredients_to_avoid={props.ingredients_to_avoid} set_ingredients_to_avoid={props.set_ingredients_to_avoid} ingredient_names={props.ingredient_names} set_ingredient_names={props.set_ingredient_names} filters={props.filters} setFilter={props.setFilter} firstName={props.firstName} setFirstName={props.setFirstName} lastName={props.lastName} setLastName={props.setLastName} age={props.age} setAge={props.setAge} gender={props.gender} setGender={props.setGender} weight={props.weight} setWeight={props.setWeight} height={props.height} setHeight={props.setHeight} allergies={props.allergies} setAllergies={props.setAllergies} injury={props.injury} setInjury={props.setInjury} userID={props.userID} setUserID={props.setUserID} selected={state}/>
        </div>
        <div className="col-10 main-content">{renderContent(props, state)}</div>
      </div>
    </div>
  );
};

export default HomePage;
