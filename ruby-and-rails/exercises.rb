# require "./mystuff.rb"
# MyStuff.apple()
# puts MyStuff::TANGERINE

# class MyStuff

#   def initialize()
#       @tangerine = "And now a thousand years between"
#   end

#   attr_reader :tangerine

#   def apple()
#       puts "I AM CLASSY APPLES!"
#   end

# end

# thing = MyStuff.new()

# thing.apple

# puts thing.tangerine

# class Animal
#   def speak
#     "Hello!"
#   end
# end

# class GoodDog < Animal
#   DOG_YEARS = 7
  
#   attr_accessor :name, :height, :weight, :age

#   @@number_of_dogs = 0

#   def initialize(n, h, w, a)
#     self.name = n
#     self.height = h
#     self.weight = w
#     self.age = a * DOG_YEARS
#     @@number_of_dogs += 1
#   end

#   def self.total_number_of_dogs
#     @@number_of_dogs
#   end

#   def speak
#     super + " from GoodDog class"
#   end

#   def change_info(n, h, w)
#     self.name = n
#     self.height = h
#     self.weight = w
#   end

#   def to_s
#     "#{self.name} weighs #{self.weight} and is #{self.height} tall."
#   end

#   def what_is_self
#     self
#   end
# end

# class Cat < Animal
# end

# puts GoodDog.total_number_of_dogs

# newDog1 = GoodDog.new('Fritz', '12 inches', '10 lbs', 5)
# puts newDog1.speak
# puts newDog1.age 
# puts newDog1
# # newDog2 = GoodDog.new('Molly')

# # newDog1.change_info('Votan', '24 inches', '45 lbs')
# # puts newDog1.info 
# newDog2 = GoodDog.new('Molly', '18 inches', '30 lbs', 13)
# puts newDog2.age 

# puts GoodDog.total_number_of_dogs

# p newDog2.what_is_self
# puts newDog1.name
# puts newDog1.speak
# puts newDog1.name
# puts newDog1.name = 'Votan'

module Swimmable
  def swim
    "I'm swimming!"
  end
end

class Animal; end

class Fish < Animal
  include Swimmable         # mixing in Swimmable module
end

class Mammal < Animal
end

class Cat < Mammal
end

class Dog < Mammal
  include Swimmable         # mixing in Swimmable module
end


sparky = Dog.new
neemo  = Fish.new
paws   = Cat.new

puts sparky.swim
puts neemo.swim
puts paws.swim 
