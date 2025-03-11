import { numeric, pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const resorts = pgTable('resorts', {
    id: uuid('id').primaryKey(),          
    name: text('name').notNull(),           
    country: text('country').notNull(),       
    description: text('description'),        
    elevation: text('elevation'), 
    easySlopes: numeric('easy-slopes'), 
    intermediateSlopes: numeric('intermediate-slopes'), 
    difficultSlopes: numeric('difficult-slopes'), 
    skiLift:numeric('ski-lift'),      
    adultPrice: numeric('adult-price'),
    youthPrice: numeric('youth-price'),                          
    review: numeric('review'),             
    images: text('images').array(),
});