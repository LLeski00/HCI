import { pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const resorts = pgTable('resorts', {
    id: uuid('id').primaryKey(),          
    name: text('name').notNull(),           
    country: text('country').notNull(),       
    description: text('description'),        
    elevation: text('elevation'), 
    easySlopes: text('easy-slopes'), 
    intermediateSlopes: text('intermediate-slopes'), 
    difficultSlopes: text('difficult-slopes'), 
    skiLift:text('ski-lift'),      
    adultPrice: text('adult-price'),
    youthPrice: text('youth-price'),                          
    review: text('review'),             
    images: text('images'),
});