from django.core.management.base import BaseCommand
from django.conf import settings
from django.db import connection
from django.apps import apps

from djongo import models

# Define models for each collection
class User(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100)
    team = models.CharField(max_length=50)
    class Meta:
        app_label = 'octofit_tracker'
        db_table = 'users'

class Team(models.Model):
    name = models.CharField(max_length=50, unique=True)
    class Meta:
        app_label = 'octofit_tracker'
        db_table = 'teams'

class Activity(models.Model):
    user = models.CharField(max_length=100)
    activity_type = models.CharField(max_length=50)
    duration = models.IntegerField()
    class Meta:
        app_label = 'octofit_tracker'
        db_table = 'activities'

class Leaderboard(models.Model):
    user = models.CharField(max_length=100)
    score = models.IntegerField()
    class Meta:
        app_label = 'octofit_tracker'
        db_table = 'leaderboard'

class Workout(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    class Meta:
        app_label = 'octofit_tracker'
        db_table = 'workouts'

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Clear existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Create users
        users = [
            User.objects.create(email='tony@stark.com', name='Tony Stark', team='Marvel'),
            User.objects.create(email='steve@rogers.com', name='Steve Rogers', team='Marvel'),
            User.objects.create(email='bruce@wayne.com', name='Bruce Wayne', team='DC'),
            User.objects.create(email='clark@kent.com', name='Clark Kent', team='DC'),
        ]

        # Create activities
        Activity.objects.create(user='Tony Stark', activity_type='Running', duration=30)
        Activity.objects.create(user='Steve Rogers', activity_type='Cycling', duration=45)
        Activity.objects.create(user='Bruce Wayne', activity_type='Swimming', duration=60)
        Activity.objects.create(user='Clark Kent', activity_type='Flying', duration=120)

        # Create leaderboard
        Leaderboard.objects.create(user='Tony Stark', score=100)
        Leaderboard.objects.create(user='Steve Rogers', score=90)
        Leaderboard.objects.create(user='Bruce Wayne', score=95)
        Leaderboard.objects.create(user='Clark Kent', score=110)

        # Create workouts
        Workout.objects.create(name='Super Strength', description='Strength training for superheroes')
        Workout.objects.create(name='Flight Training', description='Learn to fly like Superman')

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
