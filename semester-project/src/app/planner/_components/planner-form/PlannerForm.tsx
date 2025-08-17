'use client';

import { getCoordinates } from '@/app/api/coordinate';
import { Coordinates } from '@/types/coordinate';
import { PlannerFormData } from '@/types/planner';
import { FC, useState } from 'react';
import { Country, getData } from 'country-list';
import styles from './planner-form.module.css';
import { Button } from '@/components/button/Button';

interface PlannerFormProps {
  setFormData: Function;
}

const PlannerForm: FC<PlannerFormProps> = ({ setFormData }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const today = new Date().toISOString().split('T')[0];
  const countries: Country[] = getData();

  function isFormValid(form: HTMLFormElement): boolean {
    const startDate = new Date(form.startDate.value);
    const endDate = new Date(form.endDate.value);

    if (endDate < startDate) {
      setErrorMessage('End date cannot be before start date.');
      return false;
    }

    setErrorMessage(null);
    return true;
  }

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form: HTMLFormElement = event.currentTarget;

    if (!isFormValid(form)) return;

    setIsSubmitting(true);

    const currentLocation = form.city.value + ', ' + form.country.value;
    const coordinates: Coordinates | null = await getCoordinates(
      currentLocation
    );

    if (!coordinates) {
      setErrorMessage('Invalid current location. Please try again.');
      setIsSubmitting(false);
      return;
    }

    const formData: PlannerFormData = {
      startDate: new Date(form.startDate.value),
      endDate: new Date(form.endDate.value),
      numOfPeople: parseInt(form.numOfPeople.value),
      budget: parseFloat(form.budget.value),
      currentLocation: coordinates,
    };
    setFormData(formData);
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <div className={styles.gridForm}>
        <div className={styles.gridItem}>
          <label> Start date: </label>
          <input type="date" name="startDate" min={today} required />
        </div>

        <div className={styles.gridItem}>
          <label> End date: </label>
          <input type="date" name="endDate" min={today} required />
        </div>

        <div className={styles.gridItem}>
          <label> Number of people: </label>
          <input type="number" name="numOfPeople" min={1} required />
        </div>

        <div className={styles.gridItem}>
          <label> Budget: </label>
          <input type="number" name="budget" min={10} required />
        </div>

        <div className={styles.gridItem}>
          <label>Your Country: </label>
          <select name="country" required>
            <option value="">Select starting country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.gridItem}>
          <label>Your City: </label>
          <input
            type="text"
            name="city"
            placeholder="Enter your starting city"
            required
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          text={isSubmitting ? 'Finding resorts...' : 'Find resorts'}
          type="submit"
          disabled={isSubmitting}
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </form>
  );
};

export default PlannerForm;
